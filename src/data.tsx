import BulletSlide from './Slides/BulletSlide';
import CarouselSlideCard from './Components/CarouselSlideCard';
import CarouselSlide from './Slides/CarouselSlide';
import TextSlide from './Slides/TextSlide';
import VideoSlide from './Slides/VideoSlide';
import TestimonialSlide from './Slides/TestimonialSlide';
import ChapterSlide from './Slides/ChapterSlide';
import ImageSlide from './Slides/ImageSlide';

export type SlideType = {
  component: React.ReactNode;
  id: number;
  chapter: string;
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
    id: 1,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Herman Berglund'
        preTitle='Testing out the preheading'
        subTitle='framer-motion showcase'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
    ),
    id: 2,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Victor Wikström'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av massa skitgrejer'
      />
    ),
    id: 3,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Oscar Andersson'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 4,
    chapter: 'Chapter 2',
  },
  {
    component: <CarouselSlide carouselCards={carouselCards} />,
    id: 5,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <VideoSlide
        url='https://www.youtube.com/embed/Kuwk1fkP4vA'
        size='large'
      />
    ),
    id: 6,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <VideoSlide
        alignXY='center'
        subTitle='Sub Video Slide'
        url='https://www.youtube.com/embed/8C3j42KKrWM'
        size='large'
      />
    ),
    id: 7,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <TextSlide
        title='Oskar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 8,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <TextSlide
        title='Oskar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 9,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <TextSlide
        title='Oskar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 10,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <VideoSlide
        alignXY='left'
        title='Video Slide'
        subTitle='Sub Video Slide'
        url='https://www.youtube.com/embed/8C3j42KKrWM'
        size='small'
      />
    ),
    id: 11,
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
    id: 12,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <ChapterSlide
        alignXY='left'
        chapter={4}
        title='This is how you'
        subTitle='Create a chapter'
        image='https://images.unsplash.com/photo-1620180008008-d7169268f608?ixlib=rb-1.2.1'
      />
    ),
    id: 13,
    chapter: 'Chapter 4',
  },
  {
    component: (
      <ChapterSlide
        alignXY='center'
        chapter={5}
        title='This is how you'
        subTitle='Create a chapter'
        image='https://media.istockphoto.com/photos/chapter-one-picture-id1302839734'
      />
    ),
    id: 14,
    chapter: 'Chapter 5',
  },
  {
    component: (
      <ChapterSlide
        alignXY='left'
        chapter={6}
        title='Next up'
        subTitle='Learn JavaScript'
        image='https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1'
      />
    ),
    id: 15,
    chapter: 'Chapter 6',
  },
  {
    component: (
      <TextSlide
        title='Oskar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 16,
    chapter: 'Chapter 5',
  },
  {
    component: (
      <ImageSlide
        title='The heart of Asia'
        subTitle='Visit Malaysia'
        imageUrls={[
          'https://images.unsplash.com/photo-1626308888778-2b77082d53b6?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1592723905426-1181bf431d3a?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1580496297468-1e05179cfd81?ixlib=rb-1.2.1',
          'https://images.unsplash.com/photo-1565197239446-a89a684c2651?ixlib=rb-1.2.1',
          // 'https://images.unsplash.com/photo-1565197239446-a89a684c2651?ixlib=rb-1.2.1',
        ]}
      />
    ),
    id: 17,
    chapter: 'Chapter 4',
  },
];
