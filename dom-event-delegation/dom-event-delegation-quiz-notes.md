# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

a property of an event object that refers to the element that triggered the event

- Why is it possible to listen for events on one element that actually happen its descendent elements?

because they are all under the same class that is the parent of those descendants

- What DOM element property tells you what type of element it is?

addEventListener()

- What does the `element.closest()` method take as its argument and what does it return?

takes a CSS selector string as its argument and returns the closest ancestor of the element (or the element itself) that matches the selector.

- How can you remove an element from the DOM?

remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

using the event's target property

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
