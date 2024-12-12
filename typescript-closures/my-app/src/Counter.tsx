import { useState, useEffect, useCallback } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => {
    console.log('Fetching data...');
    return 'Some data';
  }, []);

  useEffect(() => {
    setCounter(counter + 1);
    const data = getData();
    console.log(data);
  }, [getData]);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
