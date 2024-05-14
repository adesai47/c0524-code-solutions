'use strict';
const student = {
  firstName: 'Aaditya',
  lastName: 'Desai',
  age: 18,
};
console.log('value of student:', student);
console.log('typeof student:', typeof student);
const firstName = student.firstName;
const lastName = student.lastName;
const fullName = `${firstName} ${lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
const vehicle = {
  make: 'BMW',
  model: 'Sedan',
  year: 2016,
};
vehicle['color'] = 'Blue';
console.log('value of vehicle["color"]:', vehicle['color']);
vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);
console.log('typeof vehicle:', typeof vehicle);
const pet = {
  name: 'Buddy',
  kind: 'Husky',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
