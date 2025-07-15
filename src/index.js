import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './dashboard/LandingPage';
import HomePage from './dashboard/HomePage';
import AboutUsPage from './dashboard/AboutUsPage';
import ContactUsPage from './dashboard/ContactUsPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import RegisterPage from './dashboard/auth/RegisterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage />} >
          <Route path='' element={< HomePage />} />
          <Route path='/register' element={< RegisterPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
