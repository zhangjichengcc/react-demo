/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 10:28:10
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 19:08:57
 * @FilePath: \webpack-demo\src\pages\UseContext\ActiveContext\context.ts
 */
import { createContext } from 'react';

type State = {
  theme: 'light' | 'dark',
  language: 'en' | 'zh',
  dispatch?: (action: Action) => void,
}

type Action = {
  type: 'themeToggle' | 'languageToggle',
  payload: State['theme'] | State['language'],
}

export const defaultTheme: State = {
  theme: 'light',
  language: 'zh',
}

export function reducer(state: State, action: Action) {
  switch(action.type) {
    case 'themeToggle':
      return {
        ...state,
        theme: action.payload as State['theme'],
      }
    case 'languageToggle':
      return {
        ...state,
        language: action.payload as State['language'],
      }
    default:
      return state;
  }
}

const Context = createContext(defaultTheme);

export default Context;
