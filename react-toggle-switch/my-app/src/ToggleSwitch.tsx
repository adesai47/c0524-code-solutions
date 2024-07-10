import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch ${isOn ? 'is-on' : ''}`}
      onClick={handleClick}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span>{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
