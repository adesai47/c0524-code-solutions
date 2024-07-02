type ImageContainerProps = {
  src: string;
};
export function ImageContainer({ src }: ImageContainerProps) {
  return <img src={src} alt="Image" />;
}
