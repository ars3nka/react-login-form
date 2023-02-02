import * as Yup from 'yup';

export const validationSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 6 characters')
      .max(20, 'Name must not exceed 20 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(3, 'Last Name must be at least 6 characters')
      .max(20, 'Last Name must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')

      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password must be at least one uppercase letter, one lowercase letter and one number.'
      )
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });
};
