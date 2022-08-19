import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css';
import Home from './pages/home/home.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes path='/'>
      <Route path='Home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
