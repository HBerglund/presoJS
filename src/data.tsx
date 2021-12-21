import BulletSlide from './Slides/BulletSlide';
import CarouselSlideCard from './Components/CarouselSlideCard';
import CarouselSlide from './Slides/CarouselSlide';
import TextSlide from './Slides/TextSlide';
import VideoSlide from './Slides/VideoSlide';
import ChapterSlide from './Slides/ChapterSlide';

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
        title='Bullet Slide'
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
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av massa skitgrejer'
      />
    ),
    id: 2,
    chapter: 'Chapter 1',
  },
  {
    component: (
      <TextSlide
        title='Victor Berglund'
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
        title='Oskar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 4,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <CarouselSlide
        title='What our clients are saying'
        carouselCards={carouselCards}
      />
    ),
    id: 5,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <VideoSlide url='https://www.youtube.com/embed/3Fbf7KovGAE' size='lg' />
    ),
    id: 6,
    chapter: 'Chapter 2',
  },
  {
    component: (
      <VideoSlide
        subTitle='Sub Video Slide'
        url='https://www.youtube.com/embed/8C3j42KKrWM'
        size='md'
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
        title='Video Slide'
        subTitle='Sub Video Slide'
        url='https://www.youtube.com/embed/8C3j42KKrWM'
        size='sm'
      />
    ),
    id: 11,
    chapter: 'Chapter 3',
  },
  {
    component: (
      <ChapterSlide
        chapter={4}
        title='Learn about React'
        subTitle='Become a world class programmer'
      />
    ),
    id: 12,
    chapter: 'Chapter 4',
  },
  {
    component: (
      <TextSlide
        title='Oskar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av Oskars skit'
      />
    ),
    id: 13,
    chapter: 'Chapter 4',
  },
];
