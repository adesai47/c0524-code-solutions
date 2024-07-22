import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    if (isPlaying) {
      if (intervalId) clearInterval(intervalId);
      setIsPlaying(false);
    } else {
      const id = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    if (intervalId) clearInterval(intervalId);
    setElapsedTime(0);
    setIsPlaying(false);
  };

  return (
    <div className="stopwatch">
      <div className="stopwatch-face" onClick={handleReset}>
        {elapsedTime}s
      </div>
      <div className="stopwatch-controls" onClick={handleToggle}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
}

export default Stopwatch;
