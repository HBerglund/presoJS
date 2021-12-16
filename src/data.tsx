import CarouselSlideCard from './Components/CarouselSlideCard';
import CarouselSlide from './Slides/CarouselSlide';
import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';
import ThirdSlide from './Slides/ThirdSlide';

export type SlideType = React.ReactNode;

export const slides: SlideType[] = [
  <CarouselSlide title='What our clients has to say' />,
  <FirstSlide />,
  <SecondSlide />,
  <ThirdSlide />,
];

export const carouselCards: SlideType[] = [
  <CarouselSlideCard
    name='Oscar Andersson'
    content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
    imageUrl='https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573'
  />,
  <CarouselSlideCard
    name='Herman Andersson'
    content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
    imageUrl='https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274'
  />,
  <CarouselSlideCard
    name='Victor Andersson'
    content='"Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom."'
    imageUrl='https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316'
  />,
  <CarouselSlideCard
    name='Bhaggy Andersson'
    content='"Being independent doesnt al creative freedom.3"'
    imageUrl='https://media.istockphoto.com/photos/lord-vishwakarma-kaikadi-maharaj-math-pandharpur-picture-id1078413712'
  />,
];
