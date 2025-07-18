import { createContext } from 'react';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type ThemeType = (typeof THEME)[keyof typeof THEME];
interface ThemeContextProps {
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextProps>({ theme: THEME.LIGHT });

export default ThemeContext;
