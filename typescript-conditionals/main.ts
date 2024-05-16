/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

interface Person {
  name: string;
  age: number;
}

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log(isUnderFive(18));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithJ('Jake'));

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const homer: Person = {
  name: 'homer simpson',
  age: 40,
};
console.log(isOldEnoughToDrink(homer));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const tyler: Person = {
  name: 'tyler defiesta',
  age: 19,
};
console.log(isOldEnoughToDrink(tyler));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 0 && person.age >= 21) {
    return false;
  } else {
    return true;
  }
}
const bart: Person = {
  name: 'bart simpson',
  age: 12,
};
console.log(isOldEnoughToDrinkAndDrive(bart));

function categorizeAcidity(pH: number): string {
  if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH < 14) {
    return 'bases';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(7));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'wakko':
      return "We're the warner brothers!";
    case 'yakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everyone!';
  }
}
console.log(introduceWarnerBro('wakko'));
function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Hobbs & Shaw';
    case 'comedy':
      return 'Happy Gilmore';
    case 'horror':
      return 'Us';
    case 'drama':
      return 'Challengers';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized';
  }
}
console.log(recommendMovie('sci-fi'));
