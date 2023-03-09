/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2023-03-09 15:35:57
 * @FilePath: /react-demo/src/pages/index.tsx
 */
import { FC } from 'react';
import PageHead from '@/components/PageHead';
import { Button, PopOver } from 'react-plugin';
// import PopOver from '@/components/PopOver'
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
      <p>plugin</p>
      <NavLink to="/reactQuery">react-query</NavLink>
      <Button>Button</Button>
      <PopOver />
    </div>
  </div>
}

export default Index;