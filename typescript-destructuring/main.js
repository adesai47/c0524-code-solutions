'use strict';
const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};
const { title, author, libraryId } = book1;
console.log(
  `The book "${title}" was written by ${author} and has the library ID ${libraryId}.`
);
const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};
const {
  title: book2Title,
  author: book2Author,
  libraryId: book2LibraryId,
} = book2;
console.log(
  `The book "${book2Title}" was written by ${book2Author} and has the library ID ${book2LibraryId}.`
);
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
const [book3, book4, book5] = library;
console.log('Book 3:', book3);
console.log('Book 4:', book4);
console.log('Book 5:', book5);
const [, , , book6] = library;
console.log('Book 6:', book6);
