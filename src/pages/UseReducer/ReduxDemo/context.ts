/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 00:18:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-10 18:59:36
 * @FilePath: \react-demo\src\pages\UseReducer\ReduxDemo\context.ts
 */
import { createContext, Dispatch } from "react";

/** Context 状态 */
interface Store {
  /** count 数值 */
  count: number,
  /** 其他状态 */
  [key: string]: any,
}

/** Action */
type ReducerAction = {
  type: 'set' | 'get';
  payload: {
    [key: keyof Store]: any
  };
}

/** Context 实体，包含 Store 状态 和 dispatch 方法 */
type ContextProps = [
  /** store 状态 */
  store: Store,
  /** dispatch 方法 */
  dispatch: Dispatch<ReducerAction>,
]

/** 默认store */
const store = {
  count: 0,
}

/** 初始化 context */ 
const initContext: ContextProps = [
  /** count */
  store,
  null
]

const Context = createContext(initContext);

function reducer(state: Store, action: ReducerAction) {
  const { type, payload } = action;
  switch (type) {
    case 'set': {
      return {
        ...state,
        ...payload,
      }
    }
    case 'get': {
      return state;
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
