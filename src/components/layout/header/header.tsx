import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../authContext/authProvider';
import { useTheme } from '../../../themeContext';
import { FormButton } from '../../form-button/form-button';
import './header.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const authInfo = useAuth();
  const navigate = useNavigate();

  return (
    <header
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="header">
        {authInfo.user ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-link-class' : ''
              }
              to="/"
            >
              Main
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-link-class' : ''
              }
              to="/posts"
            >
              Posts
            </NavLink>
            <FormButton
              type="button"
              text="Logout"
              className="change_theme_button"
              onClick={() => authInfo.logOut(() => navigate('/login'))}
            />
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-link-class' : ''
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-link-class' : ''
              }
              to="/signup"
            >
              Sign Up
            </NavLink>
          </>
        )}

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
