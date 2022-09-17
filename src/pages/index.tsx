/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-17 18:14:08
 * @FilePath: \webpack-demo\src\pages\index.tsx
 */
import { FC } from 'react';
import PageHead from '@/components/PageHead';
import { NavLink } from 'react-router-dom';

import styles from './index.less';

const Index: FC = () => {

  return <div className={styles.view}>
    <PageHead>React hooks</PageHead>
    <div className={styles.nav}>
      <NavLink to="/home">1. 首页</NavLink>
      <NavLink to="/useReducer">2. useReducer</NavLink>
      <NavLink to="/useContext">3. useContext</NavLink>
      <NavLink to="/useSyncExternalStore">3. useSyncExternalStore</NavLink>
      <NavLink to="/useMemo">3. useMemo</NavLink>
    </div>
  </div>
}

export default Index;