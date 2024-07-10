type DotsProps = {
  images: { src: string; alt: string }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export function Dots({ images, activeIndex, setActiveIndex }: DotsProps) {
  return (
    <div className="dots">
      {images.map((_, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
