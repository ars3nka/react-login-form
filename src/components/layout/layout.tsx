import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../authContext/authProvider';
import { addPosts } from '../../redux/reducers/postsReducer';
import { ThemeContext } from '../../themeContext';
import { Themes, ThemeType } from '../../themeContext/themes';
import { Header } from './header/header';
import { WrapperStyled } from './layout.styled';

export const Layout = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [error, setError] = useState('');

  const authData = useAuth();
  console.log('AUTH CONTEXT', authData.user);

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

  const fetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addPosts(json));
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeType: theme,
        theme: Themes[theme],
        toggleTheme,
      }}
    >
      <WrapperStyled theme={Themes[theme]} themeType={theme}>
        <Header />
        <Outlet />
      </WrapperStyled>
    </ThemeContext.Provider>
  );
};
