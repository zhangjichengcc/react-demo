/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-27 15:49:27
 * @FilePath: \webpack-demo\src\pages\index.tsx
 */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.less';

const Index: FC = () => {

  return <div className={styles.view}>
    <div>
      <NavLink to="/home">首页</NavLink>
    </div>
  </div>
}

export default Index;