/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:33:20
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 00:41:14
 * @FilePath: /webpack5.0-demo/src/pages/UseReducer/index.tsx
 */
import { FC, useReducer } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import Context from './context';

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
      <p>计数器</p>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>

    <div>
      <p>Reducer + useContext 实现 Redux</p>
      {/* <Context.Provider value={value}>
        <Decrement />
        <Increment />
      </Context.Provider> */}
    </div>
  </div>
}

export default Demo;