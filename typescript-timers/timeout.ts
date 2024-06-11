const heading = document.querySelector('.message');

if (heading) {
  setTimeout(() => {
    heading.textContent = 'Hello There';
  }, 2000);
}
