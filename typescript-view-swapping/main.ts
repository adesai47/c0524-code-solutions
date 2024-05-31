const tabContainer = document.querySelector('.tab-container') as HTMLDivElement;
const tabs = document.querySelectorAll('.tab') as NodeListOf<HTMLDivElement>;
const views = document.querySelectorAll('.view') as NodeListOf<HTMLDivElement>;

if (!tabContainer) throw new Error('tabContainer query did not work');
if (!tabs) throw new Error('tabs query did not work');
if (!views) throw new Error('views query did not work');

tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    tabs.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const viewName = $eventTarget.dataset.view;
    views.forEach((view) => {
      if (view.dataset.view === viewName) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  }
});
