import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import { FormSignUp } from './components/form-signup/form-signup';
import { FormLogin } from './components/form-login/form-login';
import { Layout } from './components/layout/layout';
import { FormSignUpFormik } from './components/form-signup/form-signup-formik';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<FormLogin />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="/signup-formik" element={<FormSignUpFormik />} />
      </Route>
    </Routes>
  </HashRouter>
);
