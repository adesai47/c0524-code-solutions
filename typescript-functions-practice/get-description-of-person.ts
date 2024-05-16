/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person: {
  name: string;
  occupation: string;
  birthPlace: string;
}): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}

const Paul: any = {
  name: 'Paul Kim',
  occupation: 'engineer',
  birthPlace: 'California, United States',
};
getDescriptionOfPerson(Paul);
const Elias: any = {
  name: 'Elias Lozano',
  occupation: 'referee',
  birthPlace: 'California, United States',
};
getDescriptionOfPerson(Elias);
