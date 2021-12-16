import BulletSlide from './Slides/BulletSlide';
import TextSlide from './Slides/TextSlide';

export type SlideType = {
  component: React.ReactNode;
  id: number;
};

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
        title='Oscar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av massa skitgrejer'
      />
    ),
    id: 4,
  },
];
