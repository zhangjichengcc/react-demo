/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-27 17:27:04
 * @FilePath: \webpack-demo\src\app.tsx
 */
import { FC, StrictMode } from 'react';
import Index from '@/pages/index';
import Home from '@/pages/Home';
import routes from 'config/routes.config';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import styles from './app.less';
import '@/global.less';


const APP: FC = () => {
  const Routes = useRoutes(routes);
  return Routes;
}



const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container!); // createRoot(container!) if you use TypeScript

const App: FC = () => {

  return (
    <div className={styles.app}>
      <StrictMode>
        <Router>
          <APP />
        </Router>
      </StrictMode>
    </div>
  )
}

root.render(<App />);