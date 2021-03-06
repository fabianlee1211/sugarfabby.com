import * as React from 'react';
import { baseSwitch, off, on } from './Switch.module.css';

const Switch = ({ onChange, checked }) => {
  return (
    <div className="transform scale-95">
      <input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        id="checkbox"
        aria-label={checked ? `Activate Light Mode` : `Activate Dark Mode`}
        title={checked ? `Activate Light Mode` : `Activate Dark Mode`}
        className={`${baseSwitch} ${checked ? on : off}`}
      />
    </div>
  );
};

export default Switch;
