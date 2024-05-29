const taskList = document.querySelector('.task-list');

if (!taskList) {
  throw new Error('Task list element not found.');
}

taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;

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
