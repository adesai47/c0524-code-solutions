const carouselImages = document.querySelector(
  '.carousel-images'
) as HTMLDivElement;
const images = carouselImages.querySelectorAll('img');
const prevButton = document.querySelector(
  '.carousel-prev'
) as HTMLButtonElement;
const nextButton = document.querySelector(
  '.carousel-next'
) as HTMLButtonElement;
const indicatorsContainer = document.querySelector(
  '.carousel-indicators'
) as HTMLDivElement;
const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');

let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 3000;
let interval: ReturnType<typeof setInterval>;

const updateCarousel = (index: number): void => {
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
};

const showNextImage = (): void => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel(currentIndex);
};

const showPrevImage = (): void => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel(currentIndex);
};

const goToImage = (index: number): void => {
  currentIndex = index;
  updateCarousel(currentIndex);
};

nextButton.addEventListener('click', (): void => {
  showNextImage();
  resetInterval();
});

prevButton.addEventListener('click', (): void => {
  showPrevImage();
  resetInterval();
});

indicatorsContainer.addEventListener('click', (event: Event): void => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('carousel-indicator')) {
    const index = Array.from(indicators).indexOf(target);
    if (index !== -1) {
      goToImage(index);
      resetInterval();
    }
  }
});

const startInterval = (): void => {
  interval = setInterval(showNextImage, intervalTime);
};

const resetInterval = (): void => {
  clearInterval(interval);
  startInterval();
};

updateCarousel(currentIndex);
startInterval();
