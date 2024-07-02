type ImageDescriptionProps = {
  description: string;
};
export function ImageDescription({ description }: ImageDescriptionProps) {
  return <p>{description}</p>;
}
