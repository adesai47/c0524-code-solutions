import { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ImageCard } from './ImageCard';
import { Dots } from './Dots';
import './Carousel.css';

type Image = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: Image[];
};

export function Carousel({ images }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images]);

  const prevImage = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        <FaArrowLeft />
      </button>
      <ImageCard src={images[activeIndex].src} alt={images[activeIndex].alt} />
      <button className="carousel-button next" onClick={nextImage}>
        <FaArrowRight />
      </button>
      <Dots
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
