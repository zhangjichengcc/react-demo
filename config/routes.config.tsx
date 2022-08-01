/*
 * @Author: zhangjicheng
 * @Date: 2022-07-27 14:17:25
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-02 00:14:54
 * @FilePath: /webpack5.0-demo/config/routes.config.tsx
 */
import { lazy } from 'react';
import { RouteObject } from 'react-router';
import lazyLoad from '@utils/lazyLoad';

import BlankLayout from '@/layouts/BlankLayout';
import BaseLayout from '@/layouts/BaseLayout';

const Index = lazy(() => import('@/pages/Index'));
const Home = lazy(() => import('@/pages/Home'));
const UseReducer = lazy(() => import('@/pages/UseReducer'));
const UseContext = lazy(() => import('@/pages/UseContext'));

const routes: RouteObject[] = [
  // {
  //   path: '/home',
  //   element: <BaseLayout />,
  //   children: [
  //     {
  //       path: '',
  //       element: lazyLoad(<Index />),
  //     },
  //   ]
  // },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: lazyLoad(<Index />),
      },
      {
        path: 'useReducer',
        element: lazyLoad(<UseReducer />),
      },
      {
        path: 'useContext',
        element: lazyLoad(<UseContext />),
      },
      {
        path: '/home',
        element: <Home />,
      }
    ]
  },
];

export default routes;