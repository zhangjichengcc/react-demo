/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-25 00:07:31
 * @FilePath: /webpack5.0-demo/src/app.tsx
 */
import React, { FC } from 'react';
import VerificationCode from 'picture-verification-code';
import ReactDOM from 'react-dom';

const App = () => {

  const url = new VerificationCode().render('SB250');

  return (
    <div>
      this is a react app
      <img src={url} alt="verification code" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)