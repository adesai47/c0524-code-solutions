import { useState } from 'react';
import Timer from './Timer';
import Counter from './Counter';
import './App.css';

export function App() {
  const [part, setPart] = useState<'timer' | 'counter'>('timer');

  return (
    <div className="App">
      <button onClick={() => setPart('timer')}>
        Switch to Part 1 (Stale Closures)
      </button>
      <button onClick={() => setPart('counter')}>
        Switch to Part 2 (Infinite Rerenders)
      </button>

      {part === 'timer' && <Timer />}
      {part === 'counter' && <Counter />}
    </div>
  );
}

export default App;
