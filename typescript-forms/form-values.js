'use strict';
const form = document.querySelector('form');
if (!form) {
  throw new Error('Form not found');
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = form.elements;
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formData);
  form.reset();
});
