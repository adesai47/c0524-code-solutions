const books = [
  {
    isbn: '9780333791035',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    isbn: '9780590353427',
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    isbn: '9780143303831',
    title: 'Diary of A Wimpy Kid',
    author: 'Jeff Kinney',
  },
];

console.log('Array of Books:', books);
console.log('type of books:', typeof books);

const JSONbooks = JSON.stringify(books);

console.log('JSON string of books:', JSONbooks);
console.log('type of JSONbooks:', typeof JSONbooks);

const JSONstudent = '{"id": "455441", "name": "Aaditya Desai"}';

console.log('JSON string of student:', JSONstudent);
console.log('type of JSONstudent:', typeof JSONstudent);

const student = JSON.parse(JSONstudent);

console.log('Parsed student', student);
console.log('type of parsed student', typeof student);
