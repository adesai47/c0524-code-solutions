'use strict';
/* exported getPropertyValue */
function getPropertyValue(object, key) {
  return object[key];
}
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};
console.log(getPropertyValue(person, 'firstName'));
console.log(getPropertyValue(person, 'lastName'));
console.log(getPropertyValue(person, 'age'));
