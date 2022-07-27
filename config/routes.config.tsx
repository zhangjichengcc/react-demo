/*
 * @Author: zhangjicheng
 * @Date: 2022-07-27 14:17:25
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-27 16:23:26
 * @FilePath: \webpack-demo\config\routes.config.tsx
 */
import { RouteObject } from 'react-router';

import Index from '@/pages/Index';
import Home from '@/pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/home',
    element: <Home />,
  }
];

export default routes;