import BulletSlide from './Slides/BulletSlide';
import CarouselSlideCard from './Components/CarouselSlideCard';
import CarouselSlide from './Slides/CarouselSlide';
import TextSlide from './Slides/TextSlide';

export type SlideType = {
  component: React.ReactNode;
  id: number;
};

const carouselCards: SlideType[] = [
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
        bullets={['test1', 'test2', 'test3', 'test4']}
      />
    ),
    id: 1,
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
  },
  {
    component: (
      <CarouselSlide
        title='What our clients are saying'
        carouselCards={carouselCards}
      />
    ),
    id: 5,
  },
  {
    component: (
      <CarouselSlide
        title='What our clients are saying'
        carouselCards={carouselCards}
      />
    ),
    id: 6,
  },
  {
    component: (
      <CarouselSlide
        title='What our clients are saying'
        carouselCards={carouselCards}
      />
    ),
    id: 7,
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
  },
];
