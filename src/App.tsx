import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalCss from './Assets/global';
import AppProvider from './Hooks/appProvider';
import Header from './Components/Header';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Header />
      <GlobalCss />
      <Routes />
      <ToastContainer />
    </AppProvider>
  </BrowserRouter>
);

export default App;
