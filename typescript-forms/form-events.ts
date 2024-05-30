function handleFocus(event: Event): void {
  console.log('Focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('Blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name, eventTarget.value);
}

const input1 = document.querySelector('input[name="name"]');
const input2 = document.querySelector('input[name="email"]');
const textArea = document.querySelector('textArea[name="message"]');

if (!input1) {
  throw new Error('Form controls not found');
}

if (!input2) {
  throw new Error('Form controls not found');
}

if (!textArea) {
  throw new Error('Form controls not found');
}

[input1, input2, textArea].forEach((element) => {
  element.addEventListener('focus', handleFocus);
  element.addEventListener('blur', handleBlur);
  element.addEventListener('input', handleInput);
});
