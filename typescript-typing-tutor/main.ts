document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('#phrase span');
  let currentIndex = 0;

  function updateCurrentSpan(): void {
    spans.forEach((span, index): void => {
      if (index === currentIndex) {
        span.classList.add('current');
      } else {
        span.classList.remove('current');
      }
    });
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (currentIndex >= spans.length) return;
    const currentSpan = spans[currentIndex];
    const expectedChar = currentSpan.textContent;
    const typedChar = event.key;

    if (typedChar === expectedChar) {
      currentSpan.classList.add('correct');
      currentIndex++;
    } else {
      currentSpan.classList.add('incorrect');
    }

    setTimeout(() => {
      currentSpan.classList.remove('incorrect');
      updateCurrentSpan();
    }, 500);

    updateCurrentSpan();
  }

  document.addEventListener('keydown', handleKeydown);
  updateCurrentSpan();
});
