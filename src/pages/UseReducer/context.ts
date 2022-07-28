/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 00:18:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 00:26:10
 * @FilePath: /webpack5.0-demo/src/pages/UseReducer/context.ts
 */
import { createContext } from "react";

interface ContextProps {
  count: number,
}

const store: ContextProps = {
  count: 0,
}

const Context = createContext(store);

function reducer(state: ContextProps, action: any) {
  debugger
  return state;
}

export default Context;

export {
  store,
  reducer,
}