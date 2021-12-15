import CarouselSlideCard from './Components/CarouselSlideCard';
import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';
import ThirdSlide from './Slides/ThirdSlide';

export type SlideType = React.ReactNode;

export const slides: SlideType[] = [
  <FirstSlide />,
  <SecondSlide />,
  <ThirdSlide />,
];

export const carouselCards: SlideType[] = [
  <CarouselSlideCard
    name='Oscar Andersson'
    content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
  />,
  <CarouselSlideCard
    name='Herman Andersson'
    content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
  />,
  <CarouselSlideCard
    name='Victor Andersson'
    content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
  />,
  <CarouselSlideCard
    name='Bhaggy Andersson'
    content='"Being independent doesnt al creative freedom.3"'
  />,
];
