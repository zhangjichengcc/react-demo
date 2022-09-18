/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 16:13:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-19 04:42:44
 * @FilePath: \webpack-demo\src\layouts\BaseLayout\index.tsx
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.less';

const BaseLayout: FC = () => {

  console.log('BaseLayout render')

  return (
    <div className={styles.baseLayout}>
      <div className={styles.page}>
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout;

