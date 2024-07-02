type ImageCaptionProps = {
  caption: string;
};
export function ImageCaption({ caption }: ImageCaptionProps) {
  return <p>{caption}</p>;
}
