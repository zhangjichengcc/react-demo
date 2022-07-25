/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-25 18:26:00
 * @FilePath: \webpack-demo\src\app.tsx
 */
import { FC } from 'react';
import Index from '@/pages/index';
import ReactDOM from 'react-dom';

const App: FC = () => {

  return (
    <div>
      this is a react app
      <Index />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)