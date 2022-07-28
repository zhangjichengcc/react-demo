/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 16:13:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-28 18:46:19
 * @FilePath: \webpack-demo\src\Layouts\BaseLayout\index.tsx
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.less';

const BaseLayout: FC = () => {

  return (
    <div className={styles.baseLayout}>
      <div className={styles.page}>
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout;

