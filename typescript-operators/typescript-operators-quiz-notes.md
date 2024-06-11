# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

the && operator is used if both variables are only true and the || operator is used if either variable is true to make the statement true. They can be used outside an if statement when logging two variables

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

short circuit evaluation is when the compiler skips the execution or evaluation of some sub-expressions in a logical expression and it applies to the && and || because when the condition is met and the rest of the conditions won't affect the already evaluated result, the expression will short-circuit and return that result.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

nullish coalescing operator returns the first variable always unless it is null or undefined, then it would return the second variable. It differs from the || operator because it is using true or false to determine which variable will show up.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

The ternary operator is an operator that evaluates the first variable if the condition that is put is fully true, but if not, then it will evaluate false. It differes from if/else beacuse it is much easier to use and much more concise

- What is the `?.` (optional chaining) operator? When would you use it?

THe ?. operator is an operator that returns undefined if obj is null or undefined, otherwise returns obj.prop. You would use it when you want a ceratin output to come out of a series of objects.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

A spread syntax is when when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. it is used by using ... to apply it to the code

- What data types can be spread into an array? Into an object?

spread syntax

- How does spread syntax differ from rest syntax?

Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
