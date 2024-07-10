import './ImageCard.css';

type ImageCardProps = {
  src: string;
  alt: string;
};

export function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="image-card">
      <img src={src} alt={alt} className="carousel-image" />
    </div>
  );
}
