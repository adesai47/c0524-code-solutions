# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

when the component is called

- What is a React Effect?

- When should you use an Effect and when should you not use an Effect?

Effect is needed if you want to update a component's state when some props or state change and not needed if you don't

- When do Effects run?

after the first render and after every update

- What function is used to declare an Effect?

useEffect()

- What are Effect dependencies and how do you declare them?

values that control when an effect should run in the useEffect hook

- Why would you want to clean up from an Effect?

to avoid unexpected errors

- How do you clean up from an Effect?

The cleanup function is invoked when an element that uses the useEffect hook is removed from the screen. It also cleans itself up using the cleanup function when the code runs and reruns for every render.

- When does the cleanup function run?

when the component unmounts

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
