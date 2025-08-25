import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './dashboard/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUsPage from './dashboard/ContactUsPage';
import HomePage from './dashboard/HomePage';
import LoginPage from './dashboard/LoginPage';
import UserData from './UserData';
import UserDetails from './dashboard/UserDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} >
          <Route path='' element={<HomePage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/userdata' element={<UserData />} />
          <Route path='/userdetails/:id' element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// root file  

reportWebVitals();
