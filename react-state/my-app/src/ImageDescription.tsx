import './ImageDescription';
import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % imageDescrip.length);
  };

  return <p onClick={handleClick}>{imageDescrip[currentIndex]}</p>;
}
