import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';

const imageSrc = ['/blackhole.jpeg', '/galaxies.jpeg', '/starry-sky.jpeg'];

const imageCap = [
  'Scary Blackhole',
  'Tons of Galaxies',
  'A beautiful starry sky',
];

const imageDescrip = [
  'This is a crazy scary black hole. It is like the one from Interstellar',
  'There are so many galaxies in our universe that it is crazy we have seen so many of them',
  'Lots of stars in the sky and some of them might be planets or galaxies but we cannot tell the difference between both',
];

const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
