const $button = document.querySelector('.click-button');

if (!$button) throw new Error("$button doesn't exist");

function handleClick(event: any): void {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$button.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) {
  throw new Error("Button with class 'hover-button' not found");
}

function handleMouseover(event: any): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) {
  throw new Error("doubleClickButton doesn't exist");
}

function handleDoubleClick(event: any): void {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
