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
        content='While initial client leads are the hardest to get, all my subsequent leads came from existing client referrals. Do good work and build relationships.'
        name='Oscar Andersson'
        imageUrl='https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573'
      />
    ),
    id: 5,
  },
  {
    component: (
      <CarouselSlideCard
        content='What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.'
        name='Victor Wikström'
        imageUrl='https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574'
      />
    ),
    id: 6,
  },
  {
    component: (
      <CarouselSlideCard
        content='Being independent doesnt always translate to a better income. Both paths can enable you to make money, but being independent gives you way more creative freedom.'
        name='Herman Berglund'
        imageUrl='https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316'
      />
    ),
    id: 7,
  },
];

export const slides: SlideType[] = [
  {
    component: (
      <TextSlide
        title='Herman Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av massa skitgrejer'
      />
    ),
    id: 1,
  },
  {
    component: (
      <TextSlide
        title='Victor Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av massa skitgrejer'
      />
    ),
    id: 2,
  },
  {
    component: (
      <TextSlide
        title='Oscar Berglund'
        subTitle='framer-motion showcase'
        paragraph='Detta är en visuell demo av massa skitgrejer'
      />
    ),
    id: 3,
  },
  {
    component: (
      <CarouselSlide
        title='What our clients has to say'
        carouselCards={carouselCards}
      />
    ),
    id: 4,
  },
];
