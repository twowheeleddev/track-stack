import { createContext, useContext, useState } from 'react';
import { themeProviderPropTypes } from '../utils/propTypes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        className={
          darkMode
            ? 'dark bg-gray-900 text-white'
            : 'bg-gray-100 text-black'
        }>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = themeProviderPropTypes;
