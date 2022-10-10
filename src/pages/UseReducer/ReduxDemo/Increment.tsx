/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 17:40:53
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-10 18:52:18
 * @FilePath: \react-demo\src\pages\UseReducer\ReduxDemo\Increment.tsx
 */
import { FC, useContext } from 'react';
import Context from './context';

const Increment: FC = () => {

  const [store, dispatch] = useContext(Context);;

  return (
    <button onClick={() => dispatch({type: 'set', payload: {count: store.count + 1}})}>+</button>
  )
}

export default Increment;