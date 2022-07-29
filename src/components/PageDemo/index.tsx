/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:48:45
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 18:56:49
 * @FilePath: \webpack-demo\src\components\PageDemo\index.tsx
 */
import { FC, ReactNode } from 'react';
import styles from './index.less';

interface Props {
  children?: ReactNode,
  title?: string,
}

const PageDemo: FC<Props> = (props) => {

  const { children, title = '' } = props;

  return <div className={styles.view}>
    <p>{title}</p>
    {children}
  </div>
}

export default PageDemo;