import BulletSlide from './Slides/BulletSlide';
import CarouselSlideCard from './Components/CarouselSlideCard';
import CarouselSlide from './Slides/CarouselSlide';
import TextSlide from './Slides/TextSlide';
import VideoSlide from './Slides/VideoSlide';
import TestimonialSlide from './Slides/TestimonialSlide';
import ChapterSlide from './Slides/ChapterSlide';
import ImageSlide from './Slides/ImageSlide';
import CodeSlide from './Slides/CodeSlide';

export type SlideType = {
  component: React.ReactNode;
  id: number;
  chapter?: string;
};

export type CarouselSlideType = {
  component: React.ReactNode;
  id: number;
};

/**
 * @property {React.ReactNode} component - Component slide to be rendered.
 * @property {number} id - Unique id of component.
 */
const carouselCards: CarouselSlideType[] = [
  {
    component: (
      <CarouselSlideCard
        content='"While initial client leads are the hardest to get, all my subsequent leads came from existing client referrals. Do good work and build relationships. Do good work and build relationships. Do good work. Do good."'
        name='Oscar Andersson'
        role='Gardener'
        imageUrl='https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573'
      />
    ),
    id: 200,
  },
  {
    component: (
      <CarouselSlideCard
        content='"While initial client leads are the hardest to get, all my subsequent leads came from existing client referrals."'
        name='Victor Wikström'
        role='Spiritual leader'
        imageUrl='https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574'
      />
    ),
    id: 201,
  },
  {
    component: (
      <CarouselSlideCard
        content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
        name='Herman Berglund'
        role='Songwriter'
        imageUrl='https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316'
      />
    ),
    id: 202,
  },
];

/**
 * @property {React.ReactNode} component - Slide component to be rendered.
 * @property {number} id - Unique id of component.
 * @property {string} chapter - Chapter wich displayed in progress bar (optional).
 */
export const slides: SlideType[] = [
  // {
  //   component: <TextSlide />,
  //   id: 100,
  // },
  // {
  //   component: <ChapterSlide chapter={1} />,
  //   id: 101,
  //   chapter: 'Chapter 1',
  // },
  // {
  //   component: <BulletSlide title='Introduktion och mål' />,
  //   id: 102,
  //   chapter: 'Chapter 1',
  // },
  // {
  //   component: <BulletSlide title='Syfte' />,
  //   id: 103,
  //   chapter: 'Chapter 1',
  // },
  // {
  //   component: <TextSlide title='Målgrupp' />,
  //   id: 104,
  //   chapter: 'Chapter 1',
  // },
  // {
  //   component: <TestimonialSlide preHeading='MIA OCH JOHN' />,
  //   id: 105,
  //   chapter: 'Chapter 1',
  // },
  // {
  //   component: <ChapterSlide chapter={2} />,
  //   id: 106,
  //   chapter: 'Chapter 2',
  // },
  // {
  //   component: <ImageSlide title='Projektplanering' />,
  //   id: 107,
  //   chapter: 'Chapter 2',
  // },
  // {
  //   component: <ChapterSlide chapter={3} />,
  //   id: 108,
  //   chapter: 'Chapter 3',
  // },
  // {
  //   component: <BulletSlide title='Design' />,
  //   id: 109,
  //   chapter: 'Chapter 3',
  // },
  // {
  //   component: <ImageSlide title='Wireframes' />,
  //   id: 110,
  //   chapter: 'Chapter 3',
  // },
  {
    component: (
      <ChapterSlide
        chapter={4}
        alignXY='left'
        title='Programmering'
        subTitle='Dynamisk kodslide'
        imageUrl='https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      />
    ),
    id: 111,
    chapter: 'Chapter 4',
  },
  {
    component: (
      <CodeSlide
        heading='Datafilen'
        highlightedRows={[
          {
            startRow: 0,
            endRow: 12,
            id: 1,
            text: 'Såhär ser en slide ut i datafilen',
          },
        ]}
        code={` {
      component: (
        <ChapterSlide
          chapter={4}
          alignXY='left'
          title='Programmering'
          subTitle='Dynamisk kodslide'
          imageUrl='https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        />
      ),
      id: 111,
      chapter: 'Chapter 4',
    },`}
      />
    ),
    id: 112,
    chapter: 'Chapter 4',
  },
  {
    component: (
      <CodeSlide
        heading='tailwind.config.js'
        highlightedRows={[
          {
            startRow: 0,
            endRow: 42,
            id: 1,
            text: 'Såhär ser en slide ut i datafilen',
          },
          {
            startRow: 3,
            endRow: 10,
            id: 2,
            text: 'Uppdatera fontSize',
          },
          {
            startRow: 27,
            endRow: 35,
            id: 3,
            text: 'Uppdatera färger',
          },
        ]}
        code={`module.exports = {
          content: ['./src/**/*.{js,jsx,ts,tsx}'],
          theme: {
            fontSize: {
              xl: ['6rem'],
              lg: ['5rem'],
              md: ['4rem'],
              sm: ['3rem'],
              xs: ['2rem'],
              xxs: ['1.25rem'],
              mini: ['0.8rem'],
            },
            extend: {
              spacing: {
                128: '32rem',
                144: '36rem',
              },
              blur: {
                '4xl': '100px',
              },
              borderRadius: {
                '4xl': '2rem',
              },
              backgroundImage: {
                'gradient-radial':
                  'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
              },
              colors: {
                background: '#000',
                primary: '#B25CFA',
                secondary: '#FF62AA',
                tertiary: '#4C65F7',
                textPrimary: '#FFF',
                textSecondary: '#b2b2b2',
                textAlternative: '#B25CFA',
              },
              width: {
                '1000px': '62.5rem',
              },
            },
          },
          plugins: [],
        };`}
      />
    ),
    id: 113,
    chapter: 'Chapter 4',
  },
  {
    component: (
      <CodeSlide
        heading='Code Slide'
        highlightedRows={[
          {
            startRow: 0,
            endRow: 12,
            id: 1,
            text: 'kod kod kod',
          },
        ]}
        code={`import classNames from 'classnames';
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
    const element = document.getElementById();
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
          codeChildren[i].setAttribute();
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

export default CodeSlide;`}
      />
    ),
    id: 114,
    chapter: 'Chapter 4',
  },
  {
    component: (
      <CodeSlide
        heading='Animated Text'
        highlightedRows={[
          {
            startRow: 0,
            endRow: 12,
            id: 1,
            text: 'animering wowowoww',
          },
        ]}
        code={`import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  splitOn?: 'words' | 'chars';
  delay?: number;
  staggerChildren?: true;
  disableAnimations?: boolean;
  className?: string;
  animation?: 'top' | 'bottom' | 'opacity-left' | 'opacity-right';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  splitOn,
  delay,
  staggerChildren,
  className,
  animation,
  disableAnimations,
}) => {
  const getElements = () => {
    if (splitOn === 'words') {
      return children?.toString().split(/(\s+)/);
    }
    if (splitOn === 'chars') {
      return children?.toString().split(/(?!$)/u);
    }
    return children?.toString();
  };

  const elements = getElements();

  // NEED DEFAULT
  const getAnimation = () => {
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
  };

  const parentAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay || 0,
        when: 'beforeChildren',
        staggerChildren: staggerChildren ? 0.015 : 0.005,
      },
    },
  };

  const childAnimation = {
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
  };

  if (disableAnimations || !Array.isArray(elements)) {
    return <span className={classNames(className)}>{elements}</span>;
  }

  return (
    <motion.div
      variants={parentAnimation}
      initial='hidden'
      animate='visible'
      className='flex flex-wrap'
    >
      {elements.map((el, i) => (
        <div
          key={i}
          style={
            animation === 'top' || animation === 'bottom'
              ? { overflow: 'hidden' }
              : {}
          }
        >
          <motion.span
            key={i}
            variants={childAnimation}
            custom={i}
            className={classNames(className, 'keepSpanWrap')}
          >
            {el}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;`}
      />
    ),
    id: 115,
    chapter: 'Chapter 4',
  },
  // {
  //   component: <ChapterSlide chapter={5} />,
  //   id: 116,
  //   chapter: 'Chapter 5',
  // },
  // {
  //   // utmaningar karusell
  //   component: <CarouselSlide />,
  //   id: 117,
  //   chapter: 'Chapter 5',
  // },
  // {
  //   component: <BulletSlide title='Lärdomar' />,
  //   id: 118,
  //   chapter: 'Chapter 5',
  // },
  // {
  //   component: <TextSlide title='Tack för oss!' />,
  //   id: 119,
  // },
];
