'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
function greet(name) {
  return `Hey ${name}`;
}
console.log(greet('Brian'));
function getArea(width, height) {
  const area = width * height;
  return area;
}
const areaResult = getArea(5, 4);
console.log('areaResult:', areaResult);
const getFirstName = (firstName, lastName) => {
  return firstName + lastName;
};
getFirstName('Aaditya', 'Desai');
const getLastElement = (sodaList) => {
  const numberOfSodas = sodaList.length;
  const lastElement = numberOfSodas - 1;
  const lastSoda = sodaList[lastElement];
  return lastSoda;
};
console.log(getLastElement(['coke', 'sprite', 'fanta', 'squirt']));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctions = callOtherFunction(convertMinutesToSeconds, 20);
console.log(callOtherFunctions);
