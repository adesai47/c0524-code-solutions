function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));

function greet(name: string): string {
  return `Hey ${name}`;
}
console.log(greet('Brian'));

function getArea(width: number, height: number): number {
  const area: number = width * height;
  return area;
}

const areaResult: number = getArea(5, 4);
console.log('areaResult:', areaResult);

const getFirstName = (firstName: string, lastName: string): string => {
  return firstName + lastName;
};
getFirstName('Aaditya', 'Desai');

const getLastElement = (sodaList: string[]): string => {
  const numberOfSodas: number = sodaList.length;
  const lastElement: number = numberOfSodas - 1;
  const lastSoda: string = sodaList[lastElement];

  return lastSoda;
};
console.log(getLastElement(['coke', 'sprite', 'fanta', 'squirt']));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
const callOtherFunctions: number = callOtherFunction(
  convertMinutesToSeconds,
  20
);
console.log(callOtherFunctions);
