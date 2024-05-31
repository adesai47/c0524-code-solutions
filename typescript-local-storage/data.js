'use strict';
let todos = [];
window.addEventListener('beforeunload', function () {
  const JSONtodos = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', JSONtodos);
  const previousJSONTodos = localStorage.getItem('javascript-local-storage');
  if (previousJSONTodos !== null) {
    todos = JSON.parse(previousJSONTodos);
  }
});
