/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:33:20
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-28 19:01:18
 * @FilePath: \webpack-demo\src\pages\UseReducer\index.tsx
 */
import { FC, useReducer } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';

interface initialStateProps {
  count: number;
}

const initialState: initialStateProps = {
  count: 0,
}

function reducer(state: initialStateProps, action: { type: string; }) {
  switch(action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    default:
      return state;
  }

}

const Demo: FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return <div>
    <PageHead>useReducer</PageHead>
    <PageInfo>useReducer 是 react-hooks 提供的能够在无状态组件中运行的类似 redux 的功能 api 。</PageInfo>
    
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  </div>
}

export default Demo;