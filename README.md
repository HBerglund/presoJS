# Getting Started PresoJS

To install all dependencies, in the project directory, run:

### `npm i`

Run the app in the development mode:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Basic Usage

## tailwind.config.js

Here you can change presoJS theme:

- fontSize
- spacing
- blur
- borderRadius
- backgroundImage
- colors
- width

## data.tsx

The file containing your presentation slides.

In data.tsx, insert your preferable slide components inside the slides array, as shown in the example below:

{
component: <ExampleSlide />,
id: 1,
chapter: 'Chapter 1
},

For each component slide, you can read the jsDoc comments to see what props you need/can add for the specific component by hover any <ExampleSlide>.

## Components

### ChapterSlide

### TextSlide

### BulletSlide

### ImageSlide

### VideoSlide

### CodeSlide

### CarouselSlide

## CarouselSlideCard

### TestimonialSlide

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
