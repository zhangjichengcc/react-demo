/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-26 00:33:48
 * @FilePath: /webpack5.0-demo/src/app.tsx
 */
import React, { FC } from 'react';
// import Index from '@/pages/index';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript



const App: FC = () => {

  return (
    <div>
      this is a react app
      {/* <Index /> */}
    </div>
  )
}

root.render(<App />);