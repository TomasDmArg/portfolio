// React context for theme

import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext(true); // True for dark mode and false for light mode

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}