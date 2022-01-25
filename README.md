# Getting Started PresoJS

To install all dependencies, in the project directory, run:

### `npm i`

Run the app in the development mode:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Basic Usage

## Navigation

Use the left and right arrows on your keyboard to navigate through the presentation.

Some slides includes navigation of its own:
- BulletSlide: Use enter to navigate trough the bullet points.
- CodeSlide: Use up and down arrow to navigate through your code snippets. 
- CarouselSlideCard: Use "a" and "d" or the click the arrow icons to navigate through the carousel.

## tailwind.config.js

Change the presoJS theme to your preferable colors:

- background
- primary
- secondary
- tertiary

Change your text colors:

- textPrimary
- textSecondary
- textAlternative

## data.tsx

The file contain your presentation slides.

In data.tsx, insert your preferable slide components inside the slides array, as shown in the example below:

slides = [
{
component: <ExampleSlide />,
id: 1,
chapter: 'Chapter 1
},
]

For each component slide, you can read the jsDoc comments to see what props you need/can add for the specific component by hovering any <ExampleSlide>.

NOTE: Each component must have a unique id.

## Components

### ChapterSlide

Group your presentation into chapters for your audience's convenience. Add titles and an image for visual effect.

### TextSlide

Use text content to share a visual form of your message to your audience.

### BulletSlide

Create bullet points to draw attention to important information and communicate more efficiently with your audience.

### ImageSlide

Add up to four images, with or without titles, to create an engaging presentation.

### VideoSlide

Videos capture your audience's attention. Choose between different frame sizes, with or without titles.

### CodeSlide

Present snippets of code in an easy-to-follow stream of highlighted lines of code.

### CarouselSlide

Use CarouselSlideCard to create a carousel of cards. Each CarouselSlide component takes an array of CarouselSlideCard as props. 

## CarouselSlideCard

Text content to use as a card inside CarouselSlide. Properties includes content, name, role, image etc. 

### TestimonialSlide

Motivate your audience and introduce the topic you're going to cover by using quotes by others to add credibility.

### Links
  
Example presentation using presoJS https://nostalgic-almeida-4e04ea.netlify.app/.
  
