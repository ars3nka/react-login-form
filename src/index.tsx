import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import './index.css';
import { FormSignUp } from './components/form-signup/form-signup';
import { FormLogin } from './components/form-login/form-login';
import { Layout } from './components/layout/layout';
import { FormSignUpFormik } from './components/form-signup/form-signup-formik';
import { Page404 } from './pages/404/404';
import { MainPage } from './pages/main-page/main-page';
import { PostsPage } from './pages/posts-page/posts-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/signup" element={<FormSignUpFormik />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="*" element={<Navigate to={'/404'} />} />
        <Route path="/404" element={<Page404 />} />
      </Route>
    </Routes>
  </HashRouter>
);
