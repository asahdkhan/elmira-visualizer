/* eslint-disable */
import React, { memo } from 'react';
import { Navigate, useRoutes } from 'react-router';
// import PageNotFound from '../components/PageNotFound';
import CreateKitchen from '../screens/CreateKitchen';
import ProductStudio from '../screens/Product/ProductStudio';
import DreamKitchen from '../screens/DreamKitchen';

const childrenRoutes = [
  {
    path: ':appliances/product-studio',
    element: <ProductStudio />,
  },
  {
    path: 'dream-kitchen',
    element: <DreamKitchen />,
  },
];

let appRoutes = [
  {
    path: 'northstar',
    element: <CreateKitchen />,
    children: [...childrenRoutes],
  },
  {
    path: 'heritage',
    element: <CreateKitchen />,
    children: [...childrenRoutes],
  },
];

const Routes = () => {
  return useRoutes([
    ...appRoutes,
    { path: '*', element: <Navigate to="/northstar" replace /> },
  ]);
};

export default memo(Routes);
