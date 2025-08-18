import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './dashboard/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUsPage from './dashboard/ContactUsPage';
import HomePage from './dashboard/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} >
          <Route path='' element={<HomePage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// root file  

reportWebVitals();
