/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:48:45
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-02 19:14:42
 * @FilePath: \webpack-demo\src\components\PageDemo\index.tsx
 */
import { FC, ReactElement, ReactNode } from 'react';
import styles from './index.less';

interface Props {
  children?: ReactNode,
  title?: string,
}

function fn(v: any) {
  if (v) {
    return 1;
  } else {
    return 2;
  }
}

const PageDemo: FC<Props> = (props) => {

  const { children, title = '' } = props;

  return <div className={styles.view}>
    <p>{title}</p>
    {children}
  </div>
}

export default PageDemo;