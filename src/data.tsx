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
  {
    component: (
      <TextSlide
        alignYX='centerCenter'
        preTitle='Present code & more'
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
      />
    ),
    id: 101,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <BulletSlide
        title='Presentationsverktyg'
        subTitle='Introduktion och mål'
        bullets={[
          'Webbaserat presentationsverktyg',
          'Förkunskaper i React',
          'Eleganta presentationer',
        ]}
      />
    ),
    id: 102,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <BulletSlide
        title='Genomförande av projektet'
        subTitle='Syfte'
        bullets={[
          'Komponentbibliotek',
          'Animationsbibliotek',
          'Planera, designa och programmera',
        ]}
      />
    ),
    id: 103,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <BulletSlide
        title='Vilka använder preso.js?'
        subTitle='Målgrupp'
        bullets={['Projektledare', 'Utvecklare', 'Studenter']}
      />
    ),
    id: 104,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TestimonialSlide
        preHeading='Vad säger våra användare om oss?'
        quote='"Finally! A presentation tool with sleek design for us programmers. What a treat!"'
        name='Filet MiJohn'
        role='Students'
        imageUrl='#'
      />
    ),
    id: 105,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <ChapterSlide
        chapter={2}
        alignXY='left'
        title='Planering'
        imageUrl='https://images.unsplash.com/photo-1506784881475-0e408bbca849'
      />
    ),
    id: 106,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <BulletSlide
        title='Vårt arbete?'
        subTitle='Hur har vi planerat'
        bullets={['SCRUM', 'Sprintar', 'Dagliga möten']}
      />
    ),
    id: 107,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <ImageSlide
        title='Planering'
        subTitle='Bilder från trello etc.'
        imageUrls={[
          'https://images.pexels.com/photos/6632859/pexels-photo-6632859.jpeg',
          'https://images.pexels.com/photos/6632859/pexels-photo-6632859.jpeg',
        ]}
      />
    ),
    id: 108,
    chapter: 'Chapter 2',
  },

  {
    component: <ChapterSlide chapter={3} />,
    id: 108,
    chapter: 'Chapter 3',
  },
  {
    component: <BulletSlide title='Design' />,
    id: 109,
    chapter: 'Chapter 3',
  },
  {
    component: <ImageSlide title='Wireframes' />,
    id: 110,
    chapter: 'Chapter 3',
  },
  {
    component: <ChapterSlide chapter={4} />,
    id: 111,
    chapter: 'Chapter 4',
  },
  {
    component: <CodeSlide heading='Data-filen' />,
    id: 112,
    chapter: 'Chapter 4',
  },
  {
    component: <CodeSlide heading='Tailwind-filen' />,
    id: 113,
    chapter: 'Chapter 4',
  },
  {
    component: <CodeSlide heading='Kod-filen' />,
    id: 114,
    chapter: 'Chapter 4',
  },
  {
    component: <CodeSlide heading='AnimatedText komponent' />,
    id: 115,
    chapter: 'Chapter 4',
  },
  {
    component: <ChapterSlide chapter={5} />,
    id: 116,
    chapter: 'Chapter 5',
  },
  {
    // utmaningar karusell
    component: <CarouselSlide />,
    id: 117,
    chapter: 'Chapter 5',
  },
  {
    component: <BulletSlide title='Lärdomar' />,
    id: 118,
    chapter: 'Chapter 5',
  },
  {
    component: <TextSlide title='Tack för oss!' />,
    id: 119,
  },
];
