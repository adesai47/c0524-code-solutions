/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person: {
  firstName: string;
  lastName: string;
}): string {
  return person.firstName[0];
}

const mark: any = {
  firstName: 'Mark',
  lastName: 'Richards',
};

console.log(getFirstInitialOfPerson(mark)); // Output: "L"
