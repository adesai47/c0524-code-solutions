/* exported getPropertyValue */
function getPropertyValue(object: any, key: string): any {
  return object[key];
}
const person: any = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

console.log(getPropertyValue(person, 'firstName'));
console.log(getPropertyValue(person, 'lastName'));
console.log(getPropertyValue(person, 'age'));
