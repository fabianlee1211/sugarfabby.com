import { useLayoutEffect, useState } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.__theme) {
      setMode(window.__theme);
    }
  }, []);

  const toggleTheme = (isSwitchOn) => {
    if (isSwitchOn) {
      setMode('dark');
      window.__setPreferredTheme('dark');
    } else {
      setMode('light');
      window.__setPreferredTheme('light');
    }
  };

  return [mode, toggleTheme];
};

export default useDarkMode;
