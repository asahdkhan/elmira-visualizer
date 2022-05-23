/* eslint-disable */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppDataProvider from './contexts/appDataContext';

import Routes from './route';

function App() {
  return (
    <AppDataProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </AppDataProvider>
  );
}

export default App;
