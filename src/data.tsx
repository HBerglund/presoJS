import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';
import ThirdSlide from './Slides/ThirdSlide';
import VideoSlide from './Slides/VideoSlide';

export type SlideType = React.ReactNode;

export const slides: SlideType[] = [
  <FirstSlide />,
  <SecondSlide />,
  <ThirdSlide />,
  <VideoSlide url='' title='VideoTitle' subTitle='VideoSubTitle' />,
];
