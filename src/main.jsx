import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './index.css';
import axios from 'axios';

//Deploying front
axios.defaults.baseURL = 'https://rym-back-pgat.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3015';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
