import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';
import ThirdSlide from './Slides/ThirdSlide';

export type SlideType = React.ReactNode;

export const slides: SlideType[] = [
  <FirstSlide />,
  <SecondSlide />,
  <ThirdSlide />,
];
