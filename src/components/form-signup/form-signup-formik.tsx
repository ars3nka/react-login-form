import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

import '../form-login/form-login.css';
import './form-signup.css';
import './form-signup-formik.css';

interface FormDate {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export const FormSignUpFormik = () => {
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

  const validationSchema = () => {
    return Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 6 characters')
        .max(20, 'Name must not exceed 20 characters'),
      lastName: Yup.string()
        .required('Last Name is required')
        .min(3, 'Last Name must be at least 6 characters')
        .max(20, 'Last Name must not exceed 20 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    });
  };

  {
    const initialValues = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    };

    return (
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

              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-warning float-right"
              >
                Reset
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

export default FormSignUpFormik;
