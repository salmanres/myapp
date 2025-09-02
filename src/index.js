import React, { Suspense } from 'react';
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



import RegisterPage from './dashboard/RegisterPage';
import ReactHookForm from './dashboard/ReactHookForm';
import UserDataApi from './dashboard/UserData';
const LazyComponent = React.lazy(() => import('./dashboard/ProductsPage'));

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
          <Route path='/userdetails/:id' element={<UserDetails />} />

          <Route path='/products' element={
            <Suspense fallback={<div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>}>
              <LazyComponent />
            </Suspense>
          } />

          <Route path='/register' element={<RegisterPage />} />
          <Route path='/hook-form' element={<ReactHookForm />} />
          <Route path='/userdataapi' element={<UserDataApi/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// root file  

reportWebVitals();
