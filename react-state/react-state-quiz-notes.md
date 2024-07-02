# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

hooks are special functions that have access to state and other React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

The function name must start with use followed by an uppercase letter, Hooks can only be called by React components and other hooks, All hooks in a component must always be called at the top level of a component, and in the same order, and conditional statements

- What is the purpose of state in React?

state can be used to store data between re-renders and that updating state values causes the components to re-render

- Why can't we just maintain state in a local variable?

local variable doesn't get updated by the setter function, react only keeping track of state variables.

- What two actions happen when you call a `state setter` function?

update the value of currentState and rerender our component with the next state value.

- When does the local `state variable` get updated with the new value?

everytime the page is rerendered

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
