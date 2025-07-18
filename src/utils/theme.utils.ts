import { THEME, type ThemeType } from '../contexts/ThemeContext';

export const getThemeSystem = () => {
  if (!window) return THEME.LIGHT;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME.DARK
    : THEME.LIGHT;
};

export const applyThemeToDocument = (theme: ThemeType) => {
  const root = window.document.documentElement;

  if (theme === THEME.DARK) {
    root.classList.add(THEME.DARK);
  } else {
    root.classList.remove(THEME.DARK);
  }
};
