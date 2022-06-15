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
];

let appRoutes = [
  {
    path: 'northstar',
    element: <CreateKitchen />,
    children: [...childrenRoutes],
  },
  {
    path: 'northstar/dream-kitchen',
    element: <DreamKitchen />,
  },
  { path: 'heritage', element: <></> },
];

const Routes = () => {
  return useRoutes([
    ...appRoutes,
    { path: '*', element: <Navigate to="/northstar" replace /> },
  ]);
};

export default memo(Routes);
