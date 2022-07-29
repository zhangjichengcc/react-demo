/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 00:18:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 18:44:10
 * @FilePath: \webpack-demo\src\pages\UseReducer\ReduxDemo\context.ts
 */
import { createContext } from "react";

interface ContextProps {
  count: number,
  [key: string]: any,
}

const store: ContextProps = {
  count: 0,
}

const Context = createContext(store);

function reducer(state: ContextProps, action: any) {
  const { type, payload } = action;
  switch (type) {
    case 'counter': {
      return {
        ...state,
        count: payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default Context;

export {
  store,
  reducer,
}