'use strict';
const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 3000;
let interval;
const updateCarousel = (index) => {
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
};
const showNextImage = () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel(currentIndex);
};
const showPrevImage = () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel(currentIndex);
};
const goToImage = (index) => {
  currentIndex = index;
  updateCarousel(currentIndex);
};
nextButton.addEventListener('click', () => {
  showNextImage();
  resetInterval();
});
prevButton.addEventListener('click', () => {
  showPrevImage();
  resetInterval();
});
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToImage(index);
    resetInterval();
  });
});
const startInterval = () => {
  interval = setInterval(showNextImage, intervalTime);
};
const resetInterval = () => {
  clearInterval(interval);
  startInterval();
};
updateCarousel(currentIndex);
startInterval();
