import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
  interval: 4000,
  // containerID: '#carousel',
  slideID: '.slide',
  isPlaying: true
});

carousel.init();