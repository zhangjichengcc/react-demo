/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 10:39:10
 * @FilePath: \webpack-demo\src\pages\index.tsx
 */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.less';

const Index: FC = () => {

  return <div className={styles.view}>
    <div className={styles.nav}>
      <NavLink to="/home">首页</NavLink>
      <NavLink to="/useReducer">useReducer</NavLink>
      <NavLink to="/useContext">首页</NavLink>
    </div>
  </div>
}

export default Index;