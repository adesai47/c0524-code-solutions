import './ImageCaption';
import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % imageCap.length);
  };

  return <h3 onClick={handleClick}>{imageCap[currentIndex]}</h3>;
}
