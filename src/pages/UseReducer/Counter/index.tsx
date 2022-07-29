/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 10:00:11
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 11:32:06
 * @FilePath: \webpack-demo\src\pages\UseReducer\Counter\index.tsx
 */
import { FC, useReducer } from 'react';

type InitialState = {
  count: number;
}

const initialState: InitialState = {
  count: 0,
}

function reducer(state: InitialState, action: {type: string}) {
  switch(action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

const Counter: FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )

}

export default Counter;