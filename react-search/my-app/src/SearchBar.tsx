interface SearchBarProps {
  query: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ query, onInputChange }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onInputChange}
      />
    </div>
  );
}

export default SearchBar;
