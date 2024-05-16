/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: {
  firstName: string;
  lastName: string;
}): string {
  return `${person.firstName[0]}${person.lastName[0]}`;
}

const tyler: any = {
  firstName: 'Lea',
  lastName: 'Verou',
};

console.log(getInitialsOfPerson(tyler));
