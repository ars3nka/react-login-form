import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../themeContext';
import { FormButton } from '../../form-button/form-button';
import './header.css';

export const Header = () => {
  const { theme, toggleTheme, themeType } = useTheme();
  return (
    <header
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="header">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link-class' : '')}
          to="/"
        >
          Main
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link-class' : '')}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link-class' : '')}
          to="/signup"
        >
          Sign Up
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link-class' : '')}
          to="/posts"
        >
          Posts
        </NavLink>
        <FormButton
          type="button"
          text="Change Theme"
          onClick={toggleTheme}
          className="change_theme_button"
        />
      </div>
    </header>
  );
};
