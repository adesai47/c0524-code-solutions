import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const incrementTime = () => {
      console.log(`Time before increment: ${time}`);
      setTime((prevTime) => prevTime + 1);
    };

    const timerId = setTimeout(incrementTime, 1000);

    return () => clearTimeout(timerId);
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default Timer;
