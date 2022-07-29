/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 17:40:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 18:54:27
 * @FilePath: \webpack-demo\src\pages\UseReducer\ReduxDemo\Decrement.tsx
 */
import { FC, useContext } from 'react';
import Context from './context';

const Decrement: FC = () => {

  const {count, dispatch} = useContext(Context);

  return (
    <button onClick={() => dispatch({type: 'counter', payload: count - 1})}>-</button>
  )
}

export default Decrement;
