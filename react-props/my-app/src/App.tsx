import './App.css';
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';

const headerText = 'React Image Bank';
const imageSrc =
  'https://t4.ftcdn.net/jpg/03/86/82/73/360_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg';
const imageCaption = 'A beautiful Image of Space';
const imageDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, libero
      aut ipsum doloribus eaque accusantium optio ut atque voluptatem eveniet
      esse. Ipsum iusto id, explicabo aspernatur ad velit, labore aut nulla nam
      dolorem perferendis earum distinctio deserunt? Fugit quaerat odit
      perspiciatis tenetur doloribus sapiente beatae aperiam optio delectus.
      Optio illo rem ut laudantium illum atque aliquid! Quas quia harum magnam
      accusamus eos nam ipsam, corporis provident incidunt facilis ea numquam
      voluptatem soluta inventore eveniet in aspernatur atque reiciendis,
      repellat commodi, officiis totam voluptates ipsum. Alias.`;
const buttonText = 'Click For Next Image';

function App() {
  return (
    <div className="App">
      <Header headerText={headerText} />
      <ImageContainer src={imageSrc} />
      <ImageCaption caption={imageCaption} />
      <ImageDescription description={imageDescription} />
      <ButtonContainer buttonText={buttonText} />
    </div>
  );
}

export default App;
