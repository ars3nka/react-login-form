import React, { useContext } from 'react';
import { Theme, ThemeType } from './themes';

type ThemeContextProps = {
  theme: Theme;
  themeType: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext({} as ThemeContextProps);

export const useTheme = () => useContext(ThemeContext);
