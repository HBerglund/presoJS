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
const challengeCarouselCards: CarouselSlideType[] = [
  {
    component: (
      <CarouselSlideCard
        content={
          'Tredjepartsbibliotek med typningar? Nope... 😩 Försökte skriva själva men att parsa var svårt. Använde oss tillslut av en parser och skrev logiken själva! 🦾'
        }
        name='Code slide'
        imageUrl='https://i.ibb.co/j87CLRz/Screenshot-2022-01-26-at-10-46-16.png'
      />
    ),
    id: 200,
  },
  {
    component: (
      <CarouselSlideCard
        content=' Vilka edge cases finns? Vilka props ska användas? Hur skulle en användare kunna göra "fel"? 🤔'
        name='Intuitivt, dynamiskt & användbart'
        imageUrl='https://i.ibb.co/KhVJ4TP/Screenshot-2022-01-26-at-11-12-48.png'
      />
    ),
    id: 201,
  },
  {
    component: (
      <CarouselSlideCard
        content='Alltid en utmaning? 🙀 Svårt att estimera när man bygger ett projekt från skratch. Jobba iterativt!'
        name='Estimering'
        imageUrl='https://i.ibb.co/H2FBbVs/Screenshot-2022-01-26-at-11-16-20.png'
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
  {
    component: (
      <TextSlide
        alignYX='centerCenter'
        title='Preso.js'
        paragraph='Oscar Andersson, Herman Berglund, Victor Wikström'
      />
    ),
    id: 100,
  },
  {
    component: (
      <ChapterSlide
        chapter={1}
        alignXY='center'
        title='Introduktion'
        subTitle='Vad är preso.js?'
        langSwe
      />
    ),
    id: 101,
    chapter: 'Introduktion',
  },
  {
    component: (
      <BulletSlide
        title='Målsättningar'
        subTitle='Preso.js'
        bullets={[
          'Skapa presentationsverktyg för utvecklare',
          'Använda verktyget under denna presentation',
          'Dynamiskt och användbart',
        ]}
      />
    ),
    id: 102,
    chapter: 'Introduktion',
  },
  {
    component: (
      <BulletSlide
        title='Syfte med projektet'
        subTitle='Preso.js'
        bullets={[
          'Dynamiska komponenter',
          'Presentera kodfiler',
          'Animationsbibliotek (Framer Motion / React Spring)',
        ]}
      />
    ),
    id: 103,
    chapter: 'Introduktion',
  },
  {
    component: (
      <BulletSlide
        title='Vilka använder preso.js?'
        subTitle='Målgrupp'
        bullets={['Vi', 'Utvecklare', 'Ambitiös student i FED21G?']}
      />
    ),
    id: 104,
    chapter: 'Introduktion',
  },
  {
    component: (
      <TestimonialSlide
        preHeading='Vad säger våra användare?'
        quote='"Finally! A presentation tool with sleek design for us programmers. What a treat!"'
        name='Mia Herman & John Rybo'
        role='Founders, Filet MiJohn'
        imageUrl='https://i.ibb.co/wQ5T4WC/Microsoft-Teams-image-1.png'
      />
    ),
    id: 105,
    chapter: 'Introduktion',
  },
  {
    component: (
      <ChapterSlide
        chapter={2}
        alignXY='left'
        title='Planering'
        imageUrl='https://images.unsplash.com/photo-1506784881475-0e408bbca849'
        langSwe
      />
    ),
    id: 106,
    chapter: 'Planering',
  },
  {
    component: (
      <BulletSlide
        title='PLanering & metodik'
        subTitle='Planering'
        bullets={['SCRUM', 'Planning poker', 'Dagliga möten']}
      />
    ),
    id: 107,
    chapter: 'Planering',
  },
  {
    component: (
      <ChapterSlide
        chapter={3}
        title='designprocess'
        subTitle='mockups & wireframes'
        alignXY='left'
        imageUrl='https://images.unsplash.com/photo-1633355444132-695d5876cd00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDg3fHxmaWdtYXxlbnwwfHx8fDE2MzQ3MzUzNjc&ixlib=rb-1.2.1&q=80&w=2000'
        langSwe
      />
    ),
    id: 108,
    chapter: 'Designprocess',
  },

  {
    component: (
      <BulletSlide
        subTitle='Designprocess'
        title='Utförande'
        bullets={[
          'Figma',
          'Två designsprintar',
          'Modernt, trovärdigt och snyggt',
        ]}
      />
    ),
    id: 109,
    chapter: 'Designprocess',
  },
  {
    component: (
      <ImageSlide
        subTitle='Designprocess'
        title='Carousel Slide'
        imageUrls={[
          'https://i.ibb.co/K9JJ6jc/Slider-Lowfi.jpg',
          'https://i.ibb.co/G74mycd/Slider.jpg',
        ]}
      />
    ),
    id: 110,
    chapter: 'Designprocess',
  },
  {
    component: (
      <ImageSlide
        subTitle='Designprocess'
        title='Chapter Slide'
        imageUrls={[
          'https://i.ibb.co/XXYf4Pd/Chapter-Lofi.jpg',
          'https://i.ibb.co/7jLMY56/Chapter-With-Image.jpg',
        ]}
      />
    ),
    id: 111,
    chapter: 'Designprocess',
  },
  {
    component: (
      <ChapterSlide
        chapter={4}
        alignXY='left'
        title='Programmering'
        subTitle='Dynamisk kodslide'
        imageUrl='https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        langSwe
      />
    ),
    id: 112,
    chapter: 'Programmering',
  },
  {
    component: (
      <CodeSlide
        heading='data.tsx'
        highlightedRows={[
          {
            startRow: 1,
            endRow: 24,
            id: 1,
          },
          {
            startRow: 2,
            endRow: 11,
            id: 2,
          },
          {
            startRow: 13,
            endRow: 24,
            id: 3,
          },
        ]}
        code={`export const slides: SlideType[] = [
{
  component: (
    <TextSlide
      alignYX='centerCenter'
      title='Preso.js'
      paragraph='Oscar Andersson, Herman Berglund, Victor Wikström'
    />
  ),
  id: 100,
},
{
  component: (
    <ChapterSlide
      chapter={1}
      alignXY='center'
      title='Introduktion'
      subTitle='Vad är preso.js?'
      langSwe
    />
  ),
  id: 101,
  chapter: 'Introduktion',
},
`}
      />
    ),
    id: 113,
    chapter: 'Programmering',
  },
  {
    component: (
      <CodeSlide
        heading='tailwind.config.js'
        highlightedRows={[
          {
            startRow: 1,
            endRow: 43,
            id: 1,
          },
          {
            startRow: 4,
            endRow: 12,
            id: 2,
          },
          {
            startRow: 28,
            endRow: 36,
            id: 3,
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
};
`}
      />
    ),
    id: 114,
    chapter: 'Programmering',
  },
  {
    component: (
      <CodeSlide
        heading='Code Slide'
        highlightedRows={[
          {
            startRow: 1,
            endRow: 25,
            id: 1,
          },
          {
            startRow: 10,
            endRow: 14,
            id: 2,
          },
          {
            startRow: 22,
            endRow: 26,
            id: 3,
          },
          {
            startRow: 16,
            endRow: 20,
            id: 4,
          },
        ]}
        code={`import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SlideParent from '../Components/SlideParent';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';

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
  id: number;
};

const CodeSlide = ({ highlightedRows, code, heading }: CodeSlideProps) => {
  /**
   * @property {string} heading - Heading displayed with text-md and text-textPrimary color (optional).
   * @property {string} preHeading - Pre heading displayed with text-xs and text-textPrimary color (optional).
   * @property {string} code - String of code you want to highligt from.
   * @property {array} highlightedRows - Array of objects each containing startRow, endRow, text and id.
   */

  SyntaxHighlighter.registerLanguage('jsx', jsx);

  const [codeChildren, setCodeChildren] = useState<Element[]>();

  // Array contains indexes for all "linenumber" spans
  const [lineIndexes, setLineIndexes] = useState<number[]>([]);

  // Array contains multiple arrays with index
  const [rows, setRows] = useState<Row[]>([]);

  // State for currently highlighted
  const [currentlyHighlighted, setCurrentlyHighlighted] =
    useState<CurrentlyHighlighted>(highlightedRows[0]);
`}
      />
    ),
    id: 115,
    chapter: 'Programmering',
  },
  {
    component: (
      <CodeSlide
        heading='Hitta och skapa rader'
        highlightedRows={[
          {
            startRow: 1,
            endRow: 7,
            id: 1,
          },
          {
            startRow: 9,
            endRow: 26,
            id: 2,
          },
          {
            startRow: 28,
            endRow: 41,
            id: 3,
          },
        ]}
        code={`// Populate an array with all elements in state
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
        codeChildren[i].setAttribute("id", "countRows");
      }
      codeChildren[i].classList.add(
        'opacity-20',
        'transition-all',
        'text-xxs'
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
`}
      />
    ),
    id: 116,
    chapter: 'Programmering',
  },
  {
    component: (
      <CodeSlide
        heading='Animated Text'
        highlightedRows={[
          {
            startRow: 1,
            endRow: 30,
            id: 1,
          },
          {
            startRow: 5,
            endRow: 13,
            id: 2,
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

export default AnimatedText;
`}
      />
    ),
    id: 117,
    chapter: 'Programmering',
  },
  {
    component: (
      <ChapterSlide
        chapter={5}
        title='utmaningar & lärdomar'
        subTitle='detta tar vi med oss'
        alignXY='center'
        langSwe
      />
    ),
    id: 118,
    chapter: 'Lärdomar',
  },
  {
    component: (
      <CarouselSlide
        title='utmaningar'
        carouselCards={challengeCarouselCards}
      />
    ),
    id: 119,
    chapter: 'Lärdomar',
  },
  {
    component: (
      <BulletSlide
        title='Vad har vi lärt oss?'
        subTitle='Lärdomar'
        bullets={[
          'Dynamiska och användarvänliga(?) komponenter',
          'Tailwind (uppsättning och modifiering av tailwind.config)',
          'React hooks (useCallback, useMemo, useEffect)',
        ]}
      />
    ),
    id: 120,
    chapter: 'Lärdomar',
  },
  {
    component: (
      <TextSlide
        title='Tack för oss!'
        subTitle='Dags för frågor'
        alignYX='centerCenter'
      />
    ),
    id: 121,
  },
];
