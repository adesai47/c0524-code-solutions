interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form') as HTMLFormElement;

  if (!form) {
    throw new Error('Form not found');
  }

  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const $formElements = form.elements as FormElements;
    const formData = {
      name: $formElements.name.value,
      email: $formElements.email.value,
      message: $formElements.message.value,
    };

    console.log(formData);
    form.reset();
  });
});
