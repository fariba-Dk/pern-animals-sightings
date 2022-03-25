import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';

ReactDOM.render(
  <BrowserRouter>
    {/* <Landing /> */}
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/zoo' element={<App />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
