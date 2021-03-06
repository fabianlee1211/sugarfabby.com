import useDarkMode from '@hooks/useDarkMode';
import * as React from 'react';

export const ThemeContext = React.createContext();

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  return themeContext;
};

const ThemeProvider = (props) => {
  const [mode, toggleTheme] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
