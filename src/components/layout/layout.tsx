import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../themeContext';
import { Theme, Themes, ThemeType } from '../../themeContext/themes';

export const Layout = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    switch (theme) {
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme('dark');
        break;
    }
    console.log('toggleTheme', theme);
  };
  return (
    <ThemeContext.Provider
      value={{
        themeType: theme,
        theme: Themes[theme],
        toggleTheme,
      }}
    >
      <Outlet />
    </ThemeContext.Provider>
  );
};
