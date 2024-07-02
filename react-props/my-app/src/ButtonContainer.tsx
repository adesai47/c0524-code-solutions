type ButtonContainerProps = {
  buttonText: string;
};
export function ButtonContainer({ buttonText }: ButtonContainerProps) {
  return <button>{buttonText}</button>;
}
