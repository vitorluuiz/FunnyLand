import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css';
import Home from './pages/home/home';
import Cassino from './pages/cassino/cassino';
import Temas from './pages/temas/temas';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes path='/'>
      <Route exact path='/' element={<Home />} />
      <Route path='Cassino' element={<Cassino />} />
      <Route path='Temas' element={<Temas />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
