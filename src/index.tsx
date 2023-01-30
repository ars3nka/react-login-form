import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import { FormSignUp } from './components/form-signup/form-signup';
import { FormLogin } from './components/form-login/form-login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/signup" element={<FormSignUp />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
