# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

In the scenario, it is the element that got clicked

- What is the effect of setting an element to `display: none`?

removes the elements from the DOM

- What does the `element.matches()` method take as an argument and what does it return?

it takes an element and sees if it would be selected by the specified CSS selector and it returns true if it is selected and false if it isn't

- How can you retrieve the value of an element's attribute?

getAttribute()

- At what steps of the solution would it be helpful to log things to the console?

inside the event listener to check the event.target, before updating the active tab and see if it is working properly

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

you would need to add eventListeners to every single text element

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

you would need to manually handle each view's visibility by directly manipulating their classes based on the clicked tab

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
