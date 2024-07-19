interface Pokemon {
  number: string;
  name: string;
}

interface PokemonListProps {
  pokedex: Pokemon[];
}

function PokemonList({ pokedex }: PokemonListProps) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>
          {pokemon.number} - {pokemon.name}
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
