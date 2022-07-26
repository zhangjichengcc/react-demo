/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-26 23:51:08
 * @FilePath: /webpack5.0-demo/src/app.tsx
 */
import React, { FC } from 'react';
import Index from '@/pages/index';
import ReactDOM from 'react-dom/client';


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container!); // createRoot(container!) if you use TypeScript



const App: FC = () => {

  return (
    <React.StrictMode>
      this is a react app
      <Index />
    </React.StrictMode>
  )
}

root.render(<App />);