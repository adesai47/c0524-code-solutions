'use strict';
/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
const Paul = {
  name: 'Paul Kim',
  occupation: 'engineer',
  birthPlace: 'California, United States',
};
getDescriptionOfPerson(Paul);
const Elias = {
  name: 'Elias Lozano',
  occupation: 'referee',
  birthPlace: 'California, United States',
};
getDescriptionOfPerson(Elias);
