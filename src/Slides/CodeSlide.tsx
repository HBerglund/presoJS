import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';

import SlideParent from '../Components/SlideParent';

interface CodeSlideProps {
  heading?: string;
  code: string;
  highlightedRows: CurrentlyHighlighted[];
}

type Row = {
  id: number;
  startIndex: number;
  endIndex: number;
};

type CurrentlyHighlighted = {
  startRow: number;
  endRow: number;
  text?: string;
  id: number;
};

const CodeSlide = ({ highlightedRows, code, heading }: CodeSlideProps) => {
  SyntaxHighlighter.registerLanguage('jsx', jsx);

  const [codeChildren, setCodeChildren] = useState<Element[]>();

  // Array som innehåller index för alla "linenumber" spans
  const [lineIndexes, setLineIndexes] = useState<number[]>([]);

  // Array som innehåller arrayer med index
  const [rows, setRows] = useState<Row[]>([]);

  // state för vad som är highlightat just nu
  const [currentlyHighlighted, setCurrentlyHighlighted] =
    useState<CurrentlyHighlighted>(highlightedRows[0]);

  useEffect(() => {
    const element = document.getElementById(`${currentlyHighlighted.startRow}`);
    element?.scrollIntoView({
      block: 'start',
    });
  }, [currentlyHighlighted]);

  const changeHighlight = useCallback(
    (dir: string) => {
      if (dir === 'up') {
        if (currentlyHighlighted.id === 1) return;
        setCurrentlyHighlighted(
          (prev: CurrentlyHighlighted) =>
            highlightedRows[highlightedRows.indexOf(prev) - 1]
        );
      }
      if (dir === 'down') {
        if (currentlyHighlighted.id === highlightedRows.length) return;
        setCurrentlyHighlighted(
          (prev: CurrentlyHighlighted) =>
            highlightedRows[highlightedRows.indexOf(prev) + 1]
        );
      }
    },
    [currentlyHighlighted, highlightedRows]
  );

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          changeHighlight('up');
          break;
        case 'ArrowDown':
          changeHighlight('down');
          break;
      }
      return;
    },
    [changeHighlight]
  );

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => window.removeEventListener('keyup', keyPress);
  }, [keyPress]);

  // Set styling for all elements everytime we change highlighted snippet
  useEffect(() => {
    if (codeChildren) {
      for (const child of codeChildren) {
        child.classList.add('opacity-20', 'transition-all', 'text-mini');
      }
    }
  }, [currentlyHighlighted, codeChildren]);

  // Populate an array with all elements in state
  useEffect(() => {
    const codeParent: HTMLElement | null = document.querySelector('code');
    if (codeParent?.children) {
      setCodeChildren(Array.from(codeParent.children));
    }
  }, []);

  // Populate array with all element indexes starting on a new row
  useEffect(() => {
    let countRows: number = 0;
    if (codeChildren) {
      for (let i = 0; i < codeChildren.length; i++) {
        if (codeChildren[i].classList.contains('linenumber')) {
          countRows++;
          setLineIndexes((prev) => [...prev, i]);
          codeChildren[i].setAttribute(`id`, `${countRows}`);
        }
        codeChildren[i].classList.add(
          'opacity-20',
          'transition-all',
          'text-mini'
        );
      }
    }
  }, [codeChildren]);

  // Create all rows and set state rows
  useEffect(() => {
    for (let i = 0; i < lineIndexes.length; i++) {
      setRows((prev) => [
        ...prev,
        {
          id: i + 1,
          startIndex: lineIndexes[i],
          endIndex:
            i === lineIndexes.length - 1 ? lineIndexes[i] : lineIndexes[i + 1],
        },
      ]);
    }
  }, [lineIndexes]);

  // Styling highlighted snippet
  useEffect(() => {
    if (codeChildren && currentlyHighlighted && rows.length) {
      const start = rows[currentlyHighlighted.startRow].startIndex;
      const end = rows[currentlyHighlighted.endRow].endIndex;
      for (let i = start; i < end; i++) {
        codeChildren[i].classList.remove('opacity-20', 'text-mini');
      }
    }
  }, [codeChildren, currentlyHighlighted, rows]);

  return (
    <div>
      <SlideParent>
        <div className={classNames('w-full flex justify-center')}>
          <AnimatedText
            className={classNames('text-md text-textPrimary sansHeading')}
          >
            {heading}
          </AnimatedText>
        </div>
        <div
          className={classNames(
            'w-full h-full flex items-center justify-center overflow-hidden relative'
          )}
        >
          <SyntaxHighlighter
            showLineNumbers
            language='jsx'
            style={vscDarkPlus}
            className={classNames(
              'h-5/6 w-2/4 border-2 border-[#C8947D] rounded-lg'
            )}
          >
            {code}
          </SyntaxHighlighter>
          {currentlyHighlighted.text && (
            <div
              style={{ borderRadius: '0 32px 32px 32px' }}
              className={classNames(
                'absolute right-0 top-1/4 w-80 bg-[#1E1E1E] p-6 border-2 border-white'
              )}
            >
              <AnimatedText className={classNames('text-white text-xxs')}>
                {currentlyHighlighted.text}
              </AnimatedText>
            </div>
          )}
        </div>
      </SlideParent>
      <BlurBlob position={2} size='large' color='secondary' />
      <BlurBlob position={4} size='small' color='primary' />
    </div>
  );
};

export default CodeSlide;
