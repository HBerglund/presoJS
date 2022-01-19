import React from 'react';
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
        return '';
    }
  };`;

  const snippets = [first, second, third];

  return (
    <SlideParent>
      <div>
        {snippets.map((snippet) => (
          <div className='mb-4'>
            <SyntaxHighlighter
              showLineNumbers
              language='javascript'
              style={vs2015}
            >
              {snippet}
            </SyntaxHighlighter>
          </div>
        ))}
        ;
      </div>
    </SlideParent>
  );
}

export default CodeSlide;
