/*
 * @Author: zhangjicheng
 * @Date: 2022-08-02 14:55:20
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-02 15:48:19
 * @FilePath: \webpack-demo\src\pages\UseSyncExternalStore\numberReducer.ts
 */
import { combineReducers, legacy_createStore as createStore} from 'redux';

function numberReducer(state: number = 1, action: { type: any; }) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'del':
      return state - 1;
    default:
      return state;
  }
}

/** 注册 Reducer */
const rootReducer = combineReducers({
  number: numberReducer
});

debugger

/** 创建 store */
const store = createStore(rootReducer, { number: 1 });

export default store;