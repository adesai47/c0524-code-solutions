'use strict';
const title = document.querySelector('.countdown-display');
if (title) {
  let count = 4;
  const countdownInterval = setInterval(() => {
    if (count > 1) {
      count--;
      title.textContent = count.toString();
    } else {
      title.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(countdownInterval);
    }
  }, 1000);
}
