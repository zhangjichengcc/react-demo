/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-22 00:13:48
 * @FilePath: /webpack5.0-demo/src/app.tsx
 */
import React, { FC } from 'react';
import VerificationCode from 'picture-verification-code';
import ReactDOM from 'react-dom';

const App = () => {

  return (
    <div>
      this is a react app
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)