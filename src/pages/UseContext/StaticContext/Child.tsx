/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 11:39:13
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 11:44:09
 * @FilePath: \webpack-demo\src\pages\UseContext\StaticContext\Child.tsx
 */
import { FC, useContext } from 'react';
import Context from './context';

import styles from '../index.less';

const Child: FC = () => {

  const value = useContext(Context);
  const {
    theme
  } = value;

  return (
    <div className={styles[theme]}>
      <p>Theme: {theme}</p>
    </div>
  )
}

export default Child;