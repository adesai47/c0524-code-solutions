/* exported getLastNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getLastNameOfPerson(person: Person): string {
  return person.lastName;
}

const Aaditya: any = {
  firstName: 'Aaditya',
  lastName: 'Desai',
};

console.log(getLastNameOfPerson(Aaditya));
