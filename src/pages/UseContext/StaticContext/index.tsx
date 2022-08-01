/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 10:51:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 11:46:20
 * @FilePath: \webpack-demo\src\pages\UseContext\StaticContext\index.tsx
 */
import { FC } from 'react';
import Child from './Child';

import Context, { defaultTheme } from './context';

const StaticContext: FC = () => {

  return <>
    <Context.Provider value={defaultTheme}>
      <Child />
    </Context.Provider>
  </>
}

export default StaticContext;