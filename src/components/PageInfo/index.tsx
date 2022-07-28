/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:48:45
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-28 18:49:01
 * @FilePath: \webpack-demo\src\components\PageInfo\index.tsx
 */
import { FC, ReactNode } from 'react';
import styles from './index.less';

interface Props {
  children?: ReactNode
}

const PageInfo: FC<Props> = (props) => {

  const { children } = props;

  return <p className={styles.view}>
    {children}
  </p>
}

export default PageInfo;