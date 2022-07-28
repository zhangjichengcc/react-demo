/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 16:14:16
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-28 17:08:00
 * @FilePath: \webpack-demo\src\Layouts\BlankLayout\index.tsx
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.less';

const BlankLayout: FC = () => {

  return (
    <div className={styles.BlankLayout}>
      <Outlet />
    </div>
  )
}

export default BlankLayout;