const colors: any[] = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

const america: string = `${colors[0]}, ${colors[1]}, ${colors[2]}`;
console.log('America is', america);

colors[2] = 'green';

const mexico: string = `${colors[0]}, ${colors[1]}, ${colors[2]}`;
console.log('Mexico is', mexico);

console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: any[] = ['Frank', 'Bob', 'Chris', 'David'];

const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class`);
const lastIndex: number = numberOfStudents - 1;
const lastStudent: number = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log('value of students:', students);
console.log('typeof students:', typeof students);
