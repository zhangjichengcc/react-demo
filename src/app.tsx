/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-21 00:12:32
 * @FilePath: /webpack5.0-demo/src/app.tsx
 */
import React, { FC } from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {

  return (
    <div>
      this is a react app
    </div>
  )
}

const appDom = document.getElementById('app');

const root = ReactDOM.createRoot(appDom);

root.render(App);