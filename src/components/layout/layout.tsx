import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addPosts } from '../../redux/reducers/postsReducer';
import { ThemeContext, useTheme } from '../../themeContext';
import { Themes, ThemeType } from '../../themeContext/themes';
import { Header } from './header/header';

import './layout.css';

export const Layout = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [error, setError] = useState('');

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

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addPosts(json));
      })
      .catch((error) => setError(error.message));
  }, []);

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
