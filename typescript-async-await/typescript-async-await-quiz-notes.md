# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

The async keyword marks a function as asynchronous, while the await keyword pauses execution until the asynchronous operation is complete.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

Promises use . then() and . catch() for handling asynchronous operations and chaining, while async/await provides a more readable, synchronous-like syntax for managing asynchronous code with try/catch for error handling

- When do you use `async`?

code that must respond to events

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

ou can use the await operator only in a method, lambda expression, or anonymous method that is modified by the async keyword. Within an async method, you can't use the await operator in the body of a synchronous function

- How do you handle errors with `await`?

using try-catch blocks

- What do `try`, `catch` and `throw` do? When do you use them?

The try statement defines a code block to run (to try). The catch statement defines a code block to handle any error. The throw statement defines a custom error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

You get an unhandled promise error

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

async/await is much easier and morse concise comapred to promise.then

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
