import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalCss from './Assets/global';

const App = () => (
  <BrowserRouter>
    <GlobalCss />
    <Routes />
  </BrowserRouter>
);

export default App;
