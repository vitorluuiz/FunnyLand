import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css';
import Home from './pages/home/home.jsx';
import Cassino from './pages/cassino/cassino';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes path='/'>
      <Route exact path='/' element={<Home/>}/>
      <Route path='Cassino' element={<Cassino/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
