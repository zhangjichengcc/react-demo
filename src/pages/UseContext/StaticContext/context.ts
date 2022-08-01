/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 10:28:10
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 11:40:21
 * @FilePath: \webpack-demo\src\pages\UseContext\StaticContext\context.ts
 */
import { createContext } from 'react';

const defaultTheme = {
  theme: 'light',
}

const Context = createContext(defaultTheme);

export default Context;

export {
  defaultTheme,
}