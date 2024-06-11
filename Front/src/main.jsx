<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './store.jsx';
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
>>>>>>> 2abb568b75d36185ea08843226615d4841ae279a



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider >
      <App />

    </Provider>
   
  </React.StrictMode>,
)
