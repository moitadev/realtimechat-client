type ThemeProps = {
  children: React.ReactNode;
};

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProps) => {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme
    ? JSON.parse(storedTheme)
    : { isDarkMode: false };

  const [isDarkMode, setIsDarkMode] = useState(initialTheme.isDarkMode);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify({ isDarkMode }));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
