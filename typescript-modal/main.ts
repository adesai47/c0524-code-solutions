const $open = document.querySelector('.open-modal');
const $dismiss = document.querySelector('.dismiss-modal');
const $dialogElement = document.querySelector('dialog');

if (!$open) throw new Error('The $open query failed');
if (!$dismiss) throw new Error('The $dismiss query failed');
if (!$dialogElement) throw new Error('The $dialog query failed');

$open.addEventListener('click', () => {
  $dialogElement.showModal();
});

$dismiss.addEventListener('click', () => {
  $dialogElement.close();
});
