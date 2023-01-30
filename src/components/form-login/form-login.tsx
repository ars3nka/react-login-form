import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormInput } from '../form-input/form-input';

import './form-login.css';

export const FormLogin = () => {
  const handleConfirm = () => {
    const page = document.querySelector('.login-form');
    page
      ? (page.innerHTML = `<p>Email: ${email}</p><p>Password: ${password}</p><p>Rememberme: ${isRememberme}</p>`)
      : null;
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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

  return (
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

        <button type="submit">Login</button>
        <NavLink to="/signup">
          <button type="submit" className="change_page_button">
            Sign Up
          </button>
        </NavLink>
      </form>
    </div>
  );
};
