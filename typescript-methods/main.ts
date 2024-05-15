const heroes: string[] = ['superman', 'hulk', 'ironman', 'batman'];

let randomNumber: number = Math.random();

randomNumber *= heroes.length;

const randomIndex: number = Math.floor(randomNumber);

const randomHero: string = heroes[randomIndex];
console.log('value of randomIndex:', randomIndex);
console.log('value of randomHero', randomHero);

interface Book {
  title: string;
  author: string;
}
const library: Book[] = [
  { title: 'Maze Runner', author: 'James Dashner' },
  { title: 'Harry Potter', author: 'J.K. Rowling' },
  { title: 'Diary of a Wimpy Kid', author: 'Jeff Kinney' },
];

const thirdBook = library.pop();

console.log('Last Book', thirdBook);

const firstBook = library.shift();

console.log('First Book', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

const fullName: string = 'Aaditya Desai';
const firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('value of sayMyName', sayMyName);

const employee = {
  name: 'Tyler',
  age: 18,
  position: 'server',
};

const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys', employeeKeys);

const employeeValues = Object.values(employee);
console.log('value of employeeValues', employeeValues);

const employeePairs = Object.entries(employee);
console.log('value of employeePairs', employeePairs);
