import { useState } from 'react';
import SearchBar from './SearchBar';
import Items from './Items';

const quotes = [
  'Yer a wizard Harry.',
  "I hope you're pleased with yourselves.",
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure.',
  "You're a little scary sometimes, you know that? Brilliant... but scary.",
  'There will be no foolish wand-waving or silly incantations in this class.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'If there is one thing Voldemort cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
  'There are some things you can’t share without ending up liking each other.',
  'Ah, music. A magic beyond all we do here!',
];

function SearchableList() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} onInputChange={handleInputChange} />
      <Items items={filteredQuotes} />
    </div>
  );
}

export default SearchableList;
