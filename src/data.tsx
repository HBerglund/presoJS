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

const carouselCards: CarouselSlideType[] = [
  {
    component: (
      <CarouselSlideCard
        content='"While initial client leads are the hardest to get, all my subsequent leads came from existing client referrals. Do good work and build relationships."'
        name='Oscar Andersson'
        role='Gardener'
        imageUrl='https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573'
      />
    ),
    id: 100,
  },
  {
    component: (
      <CarouselSlideCard
        content='"What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client."'
        name='Victor Wikström'
        role='Spiritual leader'
        imageUrl='https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574'
      />
    ),
    id: 101,
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
    id: 102,
  },
];

export const slides: SlideType[] = [
  {
    component: (
      <CodeSlide
        code={`/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';

import SlideParent from '../Components/SlideParent';

interface CodeSlideProps {
  heading?: string;
  preHeading?: string;
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
        child.classList.add('opacity-20', 'transition-all', 'text-mini');
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
        codeChildren[i].classList.add(
          'opacity-20',
          'transition-all',
          'text-mini'
        );
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
            Child Animation
          </AnimatedText>
        </div>
        <div
          className={classNames(
            'w-full h-full flex items-center justify-center overflow-hidden relative'
          )}
        >
          <SyntaxHighlighter
            showLineNumbers
            language='javascript'
            style={vs2015}
            className={classNames(
              'h-5/6 w-2/4 border-2 border-[#C8947D] rounded-lg'
            )}
          >
            {code}
          </SyntaxHighlighter>
          <div
            style={{ borderRadius: '0 32px 32px 32px' }}
            className={classNames(
              'absolute right-0 w-80 bg-[#1E1E1E] p-6 border-2 border-white'
            )}
          >
            <AnimatedText className={classNames('text-white text-xxs')}>
              hej hej detta är en fin slide för att visa fin kod
            </AnimatedText>
          </div>
        </div>
      </SlideParent>
      <BlurBlob position={2} size='large' color='secondary' />
      <BlurBlob position={4} size='small' color='primary' />
    </div>
  );
};`}
        highlightedRows={[
          { startRow: 0, endRow: 4, text: 'fin kod hej hej' },
          { startRow: 5, endRow: 10, text: 'hejsan oscar hur är läget?' },
          { startRow: 11, endRow: 14 },
          { startRow: 2, endRow: 10, text: 'lorem ipsum dolor sit amet' },
        ]}
      />
    ),
    id: 1,
  },
  {
    component: (
      <ChapterSlide
        alignXY='left'
        chapter={1}
        title='This is how you'
        subTitle='Create a chapter'
        image='https://images.unsplash.com/photo-1620180008008-d7169268f608?ixlib=rb-1.2.1'
      />
    ),
    id: 2,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Herman Berglund'
        preTitle='Testing out the preheading'
        subTitle='framer-motion showcase'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
    ),
    id: 3,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Victor Wikström'
        subTitle='framer-motion showcase'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
    ),
    id: 4,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Oscar Andersson'
        subTitle='framer-motion showcase'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
    ),
    id: 5,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <ChapterSlide
        alignXY='center'
        chapter={2}
        title='This is how you'
        subTitle='Create a chapter'
        image='https://images.unsplash.com/photo-1620180008008-d7169268f608?ixlib=rb-1.2.1'
      />
    ),
    id: 6,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <ImageSlide
        title='The heart of Asia'
        subTitle='Visit Malaysia'
        imageUrls={[
          'https://images.unsplash.com/photo-1626308888778-2b77082d53b6?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1592723905426-1181bf431d3a?ixlib=rb-1.2.1',
        ]}
      />
    ),
    id: 7,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <BulletSlide
        subTitle='This is a'
        title='Bullet Slide Example'
        bullets={[
          'This is the first bullet',
          'This is the second bullet',
          'This is the third bullet',
        ]}
      />
    ),
    id: 8,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <ChapterSlide
        alignXY='left'
        chapter={3}
        title='This is how you'
        subTitle='Create a chapter'
        image='https://images.unsplash.com/photo-1620180008008-d7169268f608?ixlib=rb-1.2.1'
      />
    ),
    id: 9,
    chapter: 'Chapter 3',
  },
  {
    component: <CarouselSlide carouselCards={carouselCards} />,
    id: 10,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <TextSlide
        title='Media content'
        subTitle='framer-motion showcase'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
    ),
    id: 11,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <VideoSlide
        url='https://www.youtube.com/embed/Kuwk1fkP4vA'
        size='large'
      />
    ),
    id: 12,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <VideoSlide
        alignXY='center'
        subTitle='Small video slide'
        url='https://www.youtube.com/embed/8C3j42KKrWM'
        size='small'
      />
    ),
    id: 13,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <VideoSlide
        alignXY='left'
        title='With title'
        subTitle='Small video slide'
        url='https://www.youtube.com/embed/8C3j42KKrWM'
        size='small'
      />
    ),
    id: 14,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <ChapterSlide
        alignXY='center'
        chapter={3}
        title='This is how you'
        subTitle='Create a chapter'
        image='https://media.istockphoto.com/photos/chapter-one-picture-id1302839734'
      />
    ),
    id: 15,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <TestimonialSlide
        preHeading='From the experts'
        quote='"Consectetur adipisicing duis commodo reprehenderit. Eiusmod sint ut quis elit aute dolore cillum anim deserunt."'
        name='Oscar Andersson'
        role='Web developer, Coding Coders'
        imageUrl='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1'
      />
    ),
    id: 16,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <ImageSlide
        title='Image Slide'
        subTitle='Two images'
        imageUrls={[
          'https://images.unsplash.com/photo-1626308888778-2b77082d53b6?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1592723905426-1181bf431d3a?ixlib=rb-1.2.1',
        ]}
      />
    ),
    id: 17,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <ImageSlide
        title='Image Slide'
        subTitle='Four images'
        imageUrls={[
          'https://images.unsplash.com/photo-1626308888778-2b77082d53b6?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1592723905426-1181bf431d3a?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1580496297468-1e05179cfd81?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1565197239446-a89a684c2651?ixlib=rb-1.2.1',
        ]}
      />
    ),
    id: 18,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <TextSlide
        title='The end'
        subTitle='This is the end of the presentation'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
    ),
    id: 19,
  },
];
