import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <AuthProvider>
        <ToastContainer />
         <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
