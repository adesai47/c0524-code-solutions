'use strict';
/* exported getFullNameOfPerson */
const richard = {
  firstName: 'Richard',
  lastName: 'Daniels',
};
function getFullNameOfPerson(person) {
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
}
console.log(getFullNameOfPerson(richard)); // Output: "Lea Verou"
