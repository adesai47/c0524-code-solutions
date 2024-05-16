/* exported getFullNameOfPerson */
const richard: any = {
  firstName: 'Richard',
  lastName: 'Daniels',
};

function getFullNameOfPerson(person: {
  firstName: string;
  lastName: string;
}): string {
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
}

console.log(getFullNameOfPerson(richard)); // Output: "Lea Verou"
