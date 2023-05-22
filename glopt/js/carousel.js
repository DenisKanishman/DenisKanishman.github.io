const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentPosition = 0;
const itemWidth = 600;
const numItems = 3; // Total number of items in the carousel
const containerWidth = itemWidth * numItems;

prevButton.addEventListener('click', () => {
  currentPosition += itemWidth;
  if (currentPosition > 0) {
    currentPosition = -(containerWidth - itemWidth);
  }
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;
});

nextButton.addEventListener('click', () => {
  currentPosition -= itemWidth;
  if (currentPosition < -(containerWidth - itemWidth)) {
    currentPosition = 0;
  }
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;
});
