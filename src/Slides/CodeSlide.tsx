/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SlideParent from '../Components/SlideParent';

function CodeSlide() {
  const first = ` if (disableAnimations || !Array.isArray(elements)) {
    return <span className={classNames(className)}>{elements}</span>;
  }`;
  const second = `const childAnimation = {
    hidden: getAnimation() || {},
    visible: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: i < 10 ? 0.7 + i * 0.01 : 1,
        ease:
          animation === 'top' || animation === 'bottom'
            ? [0.2, 0.9, 0.6, 1]
            : [0.7, 0.4, 0.3, 0.8],
      },
    }),
  };`;

  const third = `const getAnimation = () => {
    switch (animation) {
      case 'top':
        return { x: 0, y: '-105%' };
      case 'bottom':
        return { x: 0, y: '105%' };
      case 'opacity-left':
        return { x: '-15%', y: '50%', opacity: 0 };
      case 'opacity-right':
        return { x: '15%', y: '50%', opacity: 0 };
      default:
        return ';
    }
  };`;

  const snippets = [second, third];

  const [codeChildren, setCodeChildren] = useState<Element[]>();

  // Array som innehåller index för alla "linenumber" spans
  const [lineIndexes, setLineIndexes] = useState<number[]>([]);

  // Array som innehåller arrayer med index
  const [rows, setRows] = useState<Row[]>([]);

  // state för vad som är highlightat just nu
  const [highlightedRows, setHighlightedRows] = useState<HighlightedRows>({
    startRow: 2,
    endRow: 8,
  });

  useEffect(() => {
    const codeParent: HTMLElement | null = document.querySelector('code');
    if (codeParent?.children) {
      setCodeChildren(Array.from(codeParent.children));
    }
  }, []);

  useEffect(() => {
    if (codeChildren) {
      for (let i = 0; i < codeChildren.length; i++) {
        if (codeChildren[i].classList.contains('linenumber')) {
          setLineIndexes((prev) => [...prev, i]);
        }
        codeChildren[i].classList.add('opacity-20');
      }
    }
  }, [codeChildren]);

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

  console.log(rows);

  useEffect(() => {
    if (codeChildren && highlightedRows && rows.length) {
      const start = rows[highlightedRows.startRow].startIndex;
      const end = rows[highlightedRows.endRow].endIndex;
      for (let i = start; i < end; i++) {
        codeChildren[i].classList.remove('opacity-20');
      }
    }
  }, [codeChildren, highlightedRows, rows]);

  return (
    <SlideParent>
      <div>
        {snippets.map((snippet, i) => {
          return (
            <div className='mb-4' key={i}>
              <SyntaxHighlighter
                showLineNumbers
                language='javascript'
                style={vs2015}
              >
                {snippet}
              </SyntaxHighlighter>
            </div>
          );
        })}
        ;
      </div>
    </SlideParent>
  );
}

export default CodeSlide;

type Row = {
  id: number;
  startIndex: number;
  endIndex: number;
};

type HighlightedRows = {
  startRow: number;
  endRow: number;
};
