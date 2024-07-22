import { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

function RotatingBanner() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Banner name={items[currentIndex]} />
      <PrevButton onClick={handlePrev} />
      <NextButton onClick={handleNext} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default RotatingBanner;
