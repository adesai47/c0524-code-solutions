import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % imageSrc.length);
  };

  return (
    <div onClick={handleClick}>
      <img src={imageSrc[currentIndex]} alt="Photos" />
    </div>
  );
}
