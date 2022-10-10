/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 17:40:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-10 18:51:36
 * @FilePath: \react-demo\src\pages\UseReducer\ReduxDemo\Decrement.tsx
 */
import { FC, useContext } from 'react';
import Context from './context';

const Decrement: FC = () => {

  const [store, dispatch] = useContext(Context);

  return (
    <button onClick={() => dispatch({type: 'set', payload: {count: store.count - 1}})}>-</button>
  )
}

export default Decrement;
