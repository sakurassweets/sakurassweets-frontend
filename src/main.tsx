import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer autoClose={1500} theme="dark" />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
