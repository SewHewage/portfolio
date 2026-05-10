import { createContext, useContext, useEffect } from 'react';

// Dark mode is permanent — no toggle.
const ThemeContext = createContext({ dark: true });

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Always apply dark class — never removed.
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ dark: true }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
