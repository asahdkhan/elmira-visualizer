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

// Heritage JSON (Pricing)
// {
//   "modelName": "Model 1865-ST-C",
//   "onSelection": {
//     "style": "45-4-burner-electric-smoothtop",
//     "oven": "electric-self-convection"
//   },
//   "usa": 9495,
//   "canada": 9495
// },
// {
//   "modelName": "Model 1865-ST-CLP",
//   "onSelection": {
//     "style": "45-4-burner-electric-smoothtop",
//     "oven": "electric-self-convection",
//     "gas-type": "liquid-propane"
//   },
//   "usa": 9595,
//   "canada": 9595
// },
