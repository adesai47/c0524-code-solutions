'use strict';
const spans = document.querySelectorAll('#phrase span');
let currentIndex = 0;
function handleKeydown(event) {
  if (currentIndex >= spans.length) return;
  const currentSpan = spans[currentIndex];
  const expectedChar = currentSpan.textContent;
  const typedChar = event.key;
  if (currentIndex > 0) {
    spans[currentIndex - 1].classList.remove('current');
  }
  if (typedChar === expectedChar) {
    currentSpan.classList.add('correct');
    currentSpan.classList.remove('incorrect');
    currentIndex++;
  } else {
    currentSpan.classList.add('incorrect');
  }
  if (currentIndex < spans.length) {
    spans[currentIndex].classList.add('current');
  }
}
document.addEventListener('keydown', handleKeydown);
if (spans.length > 0) {
  spans[0].classList.add('current');
}
