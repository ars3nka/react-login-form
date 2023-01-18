import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Form = () => {
  return (
    <div className="login-form">
      <h1>Sign in</h1>
      <p>Sign in and start managing your candidates!</p>
      <form action="">
        <input type="email" id="email" placeholder="Login" />
        <div className="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
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
            <input type="checkbox" name="rememberme" id="rememberme" required />
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <a href="">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

function showHidePassword(id: string) {
  const passInput = document.getElementById(id) as HTMLInputElement;
  if (passInput.type === 'password') {
    passInput.type = 'text';
  } else if (passInput.type === 'text') {
    passInput.type = 'password';
  }
}
