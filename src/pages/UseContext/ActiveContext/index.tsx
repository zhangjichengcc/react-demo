/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 10:51:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 15:06:23
 * @FilePath: \webpack-demo\src\pages\UseContext\ActiveContext\index.tsx
 */
import { FC, useReducer } from 'react';
import Child from './Child';

import Context, { defaultTheme, reducer } from './context';

const StaticContext: FC = () => {

  const [state, dispatch] = useReducer(reducer, defaultTheme)

  return <>
    <Context.Provider value={{...state, dispatch}}>
      <Child />
    </Context.Provider>
  </>
}

export default StaticContext;