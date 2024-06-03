'use strict';
const tabContainer = document.querySelector('.tab-container');
const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');
if (!tabContainer) throw new Error('.tab-container');
if (!tabs) throw new Error('.tab');
if (!views) throw new Error('.view');
tabContainer.addEventListener('click', (event) => {
  const eventTarget = event.target;
  if (eventTarget.matches('.tab')) {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    eventTarget.classList.add('active');
    const viewName = eventTarget.getAttribute('data-view');
    views.forEach((view) => {
      if (view.getAttribute('data-view') === viewName) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  }
});
