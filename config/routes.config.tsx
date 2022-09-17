/*
 * @Author: zhangjicheng
 * @Date: 2022-07-27 14:17:25
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-17 18:13:31
 * @FilePath: \webpack-demo\config\routes.config.tsx
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
const UseSyncExternalStore = lazy(() => import('@/pages/UseSyncExternalStore'));
const UseMemo = lazy(() => import('@/pages/UseMemo'));

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
        path: 'useSyncExternalStore',
        element: lazyLoad(<UseSyncExternalStore />),
      },
      {
        path: 'useMemo',
        element: lazyLoad(<UseMemo />),
      },
      {
        path: '/home',
        element: <Home />,
      }
    ]
  },
];

export default routes;