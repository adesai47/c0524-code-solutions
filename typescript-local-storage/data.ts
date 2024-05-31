/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

window.addEventListener('beforeunload', function () {
  const JSONtodos = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', JSONtodos);
});

const previousJSONTodos = localStorage.getItem('javascript-local-storage');
if (previousJSONTodos !== null) {
  todos = JSON.parse(previousJSONTodos);
}
