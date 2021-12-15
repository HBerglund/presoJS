import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';
import TextSlide from './Slides/TextSlide';
import ThirdSlide from './Slides/ThirdSlide';

export type SlideType = React.ReactNode;

export const slides: SlideType[] = [
  <TextSlide
    title='Herman Berglund'
    subTitle='framer-motion showcase'
    paragraph='Detta är en visuell demo av massa skitgrejer'
  />,
  <SecondSlide />,
  <TextSlide
    title='Victor Berglund'
    subTitle='framer-motion showcase'
    paragraph='Detta är en visuell demo av massa skitgrejer'
  />,
  <TextSlide
    title='Oscar Berglund'
    subTitle='framer-motion showcase'
    paragraph='Detta är en visuell demo av massa skitgrejer'
  />,
  <ThirdSlide />,
];
