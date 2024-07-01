'use strict';
const lightBulb = document.getElementById('lightBulb');
if (lightBulb) {
  lightBulb.addEventListener('click', () => {
    lightBulb.classList.toggle('on');
  });
}
