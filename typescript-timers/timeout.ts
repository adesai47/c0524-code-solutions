const heading = document.querySelector('.message');
if (!heading) throw new Error('issue querying for title');

setTimeout(() => {
  heading.textContent = 'Hello There';
}, 2000);
