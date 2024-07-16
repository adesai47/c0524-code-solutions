import { useState } from 'react';
import './HotButton.css';

interface HotButtonProps {
  label: string;
}

export function HotButton({ label }: HotButtonProps) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={handleClick} className={getButtonClass(clicks)}>
        {label}
      </button>
      <p>{clicks} clicks</p>
    </div>
  );
}

function getButtonClass(clicks: number): string {
  if (clicks < 3) return 'purple';
  if (clicks < 6) return 'violet';
  if (clicks < 9) return 'red';
  if (clicks < 12) return 'orange';
  if (clicks < 15) return 'yellow';
  return 'bright';
}
