import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormButton } from '../form-button/form-button';
import { FormInput } from '../form-input/form-input';

import '../form-login/form-login.css';
import './form-signup.css';

export const FormSignUp = () => {
  const handleConfirm = () => {
    const page = document.querySelector('.signup-form');
    password === confirmPassword
      ? page
        ? (page.innerHTML = `<p>Name: ${name}</p>
  <p>Last Name: ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Password: ${password}</p>
  <p>Confirm Password: ${confirmPassword}</p>`)
        : null
      : alert('Passwords do not match');
  };

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isShowPassword, setShowPassword] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.id);
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.target.value);
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
    <div className="login-form signup-form">
      <h1>Sign up</h1>
      <p>Sign up and start managing your candidates!</p>
      <form onSubmit={handleConfirm}>
        <FormInput
          type="text"
          id="name"
          placeholder="First Name"
          onChange={handleChange}
          value={name}
        />
        <FormInput
          type="text"
          id="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={lastName}
        />
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
        <div className="password">
          <FormInput
            type="password"
            id="confirmPassword"
            placeholder="Repeat Password"
            onChange={handleChange}
            value={confirmPassword}
          />
          <FontAwesomeIcon
            icon={faEye}
            size="lg"
            id="password-control"
            onClick={() => showHidePassword('password')}
          />
        </div>

        <FormButton type="submit" text="Sign Up" />
        <NavLink to="/">
          <FormButton
            type="submit"
            className="change_page_button"
            text="Already registered? Login!"
          />
        </NavLink>
      </form>
    </div>
  );
};
