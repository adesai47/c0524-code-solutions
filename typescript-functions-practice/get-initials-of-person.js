'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return `${person.firstName[0]}${person.lastName[0]}`;
}
const tyler = {
  firstName: 'Lea',
  lastName: 'Verou',
};
console.log(getInitialsOfPerson(tyler));
