import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



// using Browser Router to load App function
ReactDOM.render(
  <BrowserRouter>

    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// this is entrance file for this app