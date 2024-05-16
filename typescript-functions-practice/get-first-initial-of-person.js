'use strict';
/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName[0];
}
const mark = {
  firstName: 'Mark',
  lastName: 'Richards',
};
console.log(getFirstInitialOfPerson(mark)); // Output: "L"
