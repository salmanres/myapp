import React, {lazy, Suspense} from 'react';
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
import DataPage from './dashboard/DataPage';
import ApiPage from './dashboard/ApiPage';
// import BlogDetailsPage from './dashboard/BlogDetailsPage';

const BlogDetailsPage = lazy(()=> import('./dashboard/BlogDetailsPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage />} >
          <Route path='' element={< HomePage />} />
          <Route path='/register' element={< RegisterPage />} />
          <Route path='/mapping' element={< DataPage/>} />
          <Route path='/fetch-api' element={< ApiPage/>} />
          <Route path='/blogdetails/:title' element={
            <Suspense fallback={<h1>loading....</h1>}>
              <BlogDetailsPage />
            </Suspense>
          } />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
