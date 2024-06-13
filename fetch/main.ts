async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    console.log('JSONPlaceholder users:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function fetchPokemon(pokemonId: number): Promise<void> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    console.log('Pokémon data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchUsers();
fetchPokemon(1);
