/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 17:40:53
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-29 18:47:34
 * @FilePath: \webpack-demo\src\pages\UseReducer\ReduxDemo\Increment.tsx
 */
import { FC, useContext } from 'react';
import Context from './context';

const Increment: FC = () => {

  const context = useContext(Context);

  const {
    count,
    dispatch
  } = context;

  return (
    <button onClick={() => dispatch({type: 'counter', payload: count + 1})}>+</button>
  )
}

export default Increment;