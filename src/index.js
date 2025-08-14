import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './dashboard/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUsPage from './dashboard/ContactUsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// root file

reportWebVitals();
