import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext, useTheme } from '../../themeContext';
import { Theme, Themes, ThemeType } from '../../themeContext/themes';
import { Header } from './header/header';

import './layout.css';

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
      <div
        className="wrapper"
        style={{
          backgroundColor: Themes[theme].background,
          color: Themes[theme].text,
        }}
      >
        <Header />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};
