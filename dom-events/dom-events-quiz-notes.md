# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

debugging

- What is the purpose of events and event handling?

it notifies changes in the browser

- Are all possible parameters required to use a JavaScript method or function?

yes

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener()

- What is a callback function?

a function that is passed throguh another function as a parameter

- What object is passed into an event listener callback when the event fires?

event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

a property of an event object that refers to the element that triggered the event

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

in the first one, the callback function is not being called while the second one, the callback function is being called.

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
