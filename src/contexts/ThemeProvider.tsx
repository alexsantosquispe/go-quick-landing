import { useEffect, useState, type ReactNode } from 'react';
import { applyThemeToDocument, getThemeSystem } from '../utils/theme.utils';
import ThemeContext, { THEME, type ThemeType } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(THEME.LIGHT);

  useEffect(() => {
    const themeSystem = getThemeSystem();
    setTheme(themeSystem);
    applyThemeToDocument(themeSystem);
  }, []);

  //TODO: Complete the functionality for the theme system on change
  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //     const handleChange = (e: MediaQueryListEvent) => {
  //       setTheme(e.matches ? THEME.DARK : THEME.LIGHT);
  //     };

  //     mediaQuery.addEventListener('change', handleChange);
  //     return () => mediaQuery.removeEventListener('change', handleChange);
  //   }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
