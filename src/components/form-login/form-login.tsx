import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormButton } from '../form-button/form-button';
import { FormInput } from '../form-input/form-input';

import { useTheme } from '../../themeContext';

import './form-login.css';
import { FormStyled } from './form-login.styled';
import { InputError } from '../input-error/input-error';

// eslint-disable-next-line no-useless-escape
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const FormLogin = () => {
  const { theme, toggleTheme, themeType } = useTheme();

  const handleConfirm = () => {
    const page = document.querySelector('.login-form');
    page
      ? (page.innerHTML = `<p>Email: ${email}</p><p>Password: ${password}</p><p>Rememberme: ${isRememberme}</p>`)
      : null;
  };

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [isRememberme, setIsRememberme] = useState<boolean>(false);
  const [isShowPassword, setShowPassword] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.id);
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
    }
  };

  const showHidePassword = (id: string) => {
    setShowPassword(!isShowPassword);
    const passInput = document.getElementById(id) as HTMLInputElement;
    isShowPassword ? (passInput.type = 'text') : (passInput.type = 'password');
    console.log(isShowPassword);
  };

  useEffect(() => {
    const emailElement: HTMLElement | null = document.getElementById('email');
    if (!regexEmail.test(email) && email.length !== 0) {
      setEmailError('Please enter correct email');
      {
        emailElement ? (emailElement.style.marginBottom = '0px') : null;
      }
    } else {
      setEmailError('');
      {
        emailElement ? (emailElement.style.marginBottom = '25px') : null;
      }
    }
  }, [email]);

  useEffect(() => {
    if (!regexPassword.test(password) && password.length !== 0) {
      setPasswordError('Please enter correct password');
    } else {
      setPasswordError('');
    }
  }, [password]);

  return (
    <FormStyled themeType={themeType} theme={theme}>
      <div className="login-form">
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>
        <form onSubmit={handleConfirm}>
          <FormInput
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={email}
          />
          <InputError error={emailError} />
          <div className="password">
            <FormInput
              type="password"
              id="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={password}
            />
            <FontAwesomeIcon
              icon={faEye}
              size="lg"
              id="password-control"
              onClick={() => showHidePassword('password')}
            />
          </div>
          <InputError error={passwordError} />
          <div className="login-form-rememberme">
            <div>
              <FormInput
                type="checkbox"
                id="rememberme"
                onChange={() => setIsRememberme(!isRememberme)}
              />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a href="">Forgot password?</a>
          </div>
          <FormButton type="submit" text="Login" />

          <NavLink to="/signup">
            <FormButton
              type="button"
              className="change_page_button"
              text="New? Sign up now!"
            />
          </NavLink>
        </form>
      </div>
    </FormStyled>
  );
};
