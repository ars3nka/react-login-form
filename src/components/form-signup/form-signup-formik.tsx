import { ErrorMessage, Field, Form, Formik } from 'formik';

import '../form-login/form-login.css';
import './form-signup-formik.css';
import { validationSchema } from '../form-validation-schema/form-validation-schema';
import { NavLink } from 'react-router-dom';
import { FormButton } from '../form-button/form-button';
import { useTheme } from '../../themeContext';
import { FormStyled } from '../form-login/form-login.styled';

interface FormDate {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export const FormSignUpFormik = () => {
  const { theme, toggleTheme, themeType } = useTheme();
  const handleSubmit = (data: FormDate) => {
    const page = document.querySelector('.signup-form');
    console.log(JSON.stringify(data, null, 2));
    page
      ? (page.innerHTML = `<p>Name: ${data.name}</p>
    <p>Last Name: ${data.lastName}</p>
    <p>Email: ${data.email}</p>
    <p>Password: ${data.password}</p>
    <p>Confirm Password: ${data.confirmPassword}</p>
    <p>Accept Terms: ${data.acceptTerms}</p>`)
      : null;
  };

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  return (
    <FormStyled themeType={themeType} theme={theme}>
      <div className="login-form signup-form signup-form-formik">
        <h1>Sign up</h1>
        <p>Sign up and start managing your candidates!</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <div className="form-group">
                <Field
                  style={{
                    backgroundColor: theme.inputBackground,
                    color: theme.inputText,
                  }}
                  placeholder="First Name"
                  name="name"
                  type="text"
                  className={
                    'form-control' +
                    (errors.name && touched.name ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  style={{
                    backgroundColor: theme.inputBackground,
                    color: theme.inputText,
                  }}
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  className={
                    'form-control' +
                    (errors.lastName && touched.lastName ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  style={{
                    backgroundColor: theme.inputBackground,
                    color: theme.inputText,
                  }}
                  placeholder="Email"
                  name="email"
                  type="email"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  style={{
                    backgroundColor: theme.inputBackground,
                    color: theme.inputText,
                  }}
                  placeholder="Password"
                  name="password"
                  type="password"
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  style={{
                    backgroundColor: theme.inputBackground,
                    color: theme.inputText,
                  }}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group form-check">
                <Field
                  name="acceptTerms"
                  type="checkbox"
                  id="acceptTerms"
                  className={
                    'form-check-input' +
                    (errors.acceptTerms && touched.acceptTerms
                      ? ' is-invalid'
                      : '')
                  }
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  I have read and agree to the Terms
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <FormButton
                type="submit"
                className="btn btn-primary"
                text="Register"
              />
              <FormButton
                type="button"
                className="btn btn-warning"
                text="Reset"
                onClick={resetForm}
              />
              <NavLink to="/">
                <FormButton
                  type="button"
                  className="change_page_button"
                  text="Already registered? Login!"
                />
              </NavLink>
              <FormButton
                type="button"
                text="Change Theme"
                onClick={toggleTheme}
                className="change_theme_button"
              />
            </Form>
          )}
        </Formik>
      </div>
    </FormStyled>
  );
};
