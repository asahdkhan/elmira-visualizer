/* eslint-disable */
import React, { memo } from 'react';
import { useRoutes } from 'react-router';
import PageNotFound from '../components/PageNotFound';
import CreateKitchen from '../screens/CreateKitchen';
import ProductStudioStage1 from '../screens/Product/ProductStudioStage1';
import ProductStudioStage2 from '../screens/Product/ProductStudioStage2';
import ProductStudioStage3 from '../screens/Product/ProductStudioStage3';
import ProductStudioStage4 from '../screens/Product/ProductStudioStage4';

const childrenRoutes = [
  { path: ':appliances/stage-1', element: <ProductStudioStage1 /> },
  { path: ':appliances/stage-2', element: <ProductStudioStage2 /> },
  { path: ':appliances/stage-3', element: <ProductStudioStage3 /> },
  { path: ':appliances/stage-4', element: <ProductStudioStage4 /> },
];

let appRoutes = [
  {
    path: 'northstar',
    element: <CreateKitchen />,
    children: [...childrenRoutes],
  },
  { path: 'heritage', element: <></> },
];

const Routes = () => {
  return useRoutes([...appRoutes, { path: '*', element: <PageNotFound /> }]);
};

export default memo(Routes);
