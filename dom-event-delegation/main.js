'use strict';
const taskList = document.querySelector('.task-list');
if (!taskList) {
  throw new Error('Task list element not found.');
}
taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const taskListItem = eventTarget.closest('.task-list-item');
    if (taskListItem) {
      console.log(taskListItem);
      taskListItem.remove();
    }
  }
});
