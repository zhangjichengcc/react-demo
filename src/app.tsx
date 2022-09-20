/*
 * @Author: zhangjicheng
 * @Date: 2022-07-20 23:53:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-20 23:48:53
 * @FilePath: /webpack5.0-demo/src/app.tsx
 */
import { FC, useCallback, memo } from 'react';
import routes from 'config/routes.config';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import styles from './app.less';
import '@/global.less';




const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container!); // createRoot(container!) if you use TypeScript

const App: FC = () => {

  const APP: FC = memo(() => {
    console.log('router')
    const Routes = useRoutes(routes);
    return Routes;
  })
  
  return (
    <div className={styles.app}>
      <Router>
        <APP />
      </Router>
    </div>
  )
}

root.render(<App />);