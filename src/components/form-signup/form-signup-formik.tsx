import { ErrorMessage, Field, Form, Formik } from 'formik';

import '../form-login/form-login.css';
import './form-signup-formik.css';
import { validationSchema } from '../form-validation-schema/form-validation-schema';
import { NavLink, useNavigate } from 'react-router-dom';
import { FormButton } from '../form-button/form-button';
import { useTheme } from '../../themeContext';
import { FormStyled } from '../form-login/form-login.styled';
import { useAuth } from '../../authContext/authProvider';

interface FormDate {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export const FormSignUpFormik = () => {
  const { theme, themeType } = useTheme();
  const authInfo = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (data: FormDate) => {
    console.log(JSON.stringify(data, null, 2));
    authInfo.logIn(data.name, () => navigate('/posts'));
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
              <div className="signup-button-group">
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
              </div>

              <NavLink to="/login">
                <FormButton
                  type="button"
                  className="change_page_button"
                  text="Already registered? Login!"
                />
              </NavLink>
            </Form>
          )}
        </Formik>
      </div>
    </FormStyled>
  );
};
