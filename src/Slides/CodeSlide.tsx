/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SlideParent from '../Components/SlideParent';

interface CodeSlideProps {
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
};

const CodeSlide = ({ highlightedRows, code }: CodeSlideProps) => {
  const [codeChildren, setCodeChildren] = useState<Element[]>();

  // Array som innehåller index för alla "linenumber" spans
  const [lineIndexes, setLineIndexes] = useState<number[]>([]);

  // Array som innehåller arrayer med index
  const [rows, setRows] = useState<Row[]>([]);

  // State för alla highlights
  const highlights: CurrentlyHighlighted[] = highlightedRows;

  // state för vad som är highlightat just nu
  const [currentlyHighlighted, setCurrentlyHighlighted] =
    useState<CurrentlyHighlighted>(highlights[0]);

  const keyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        changeHighlight('up');
        break;
      case 'ArrowDown':
        changeHighlight('down');
        break;
    }
    return;
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => window.removeEventListener('keyup', keyPress);
  }, [keyPress]);

  const changeHighlight = (dir: string) => {
    if (dir === 'up') {
      setCurrentlyHighlighted(
        (prev: CurrentlyHighlighted) => highlights[highlights.indexOf(prev) - 1]
      );
    }
    if (dir === 'down') {
      setCurrentlyHighlighted(
        (prev: CurrentlyHighlighted) => highlights[highlights.indexOf(prev) + 1]
      );
    }
  };

  useEffect(() => {
    if (codeChildren) {
      for (const child of codeChildren) {
        child.classList.add('opacity-20');
      }
    }
  }, [currentlyHighlighted]);

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

  useEffect(() => {
    if (codeChildren && currentlyHighlighted && rows.length) {
      const start = rows[currentlyHighlighted.startRow].startIndex;
      const end = rows[currentlyHighlighted.endRow].endIndex;
      for (let i = start; i < end; i++) {
        codeChildren[i].classList.remove('opacity-20');
      }
    }
  }, [codeChildren, currentlyHighlighted, rows]);

  return (
    <SlideParent>
      <div>
        <SyntaxHighlighter showLineNumbers language='javascript' style={vs2015}>
          {code}
        </SyntaxHighlighter>
      </div>
    </SlideParent>
  );
};

export default CodeSlide;
