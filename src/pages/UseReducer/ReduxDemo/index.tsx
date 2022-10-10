/*
 * @Author: zhangjicheng
 * @Date: 2022-07-29 11:33:37
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-10 18:50:49
 * @FilePath: \react-demo\src\pages\UseReducer\ReduxDemo\index.tsx
 */
import { FC, useReducer } from 'react';
import Context, {store, reducer} from './context';
import Increment from './Increment';
import Decrement from './Decrement';

const ReduxDemo: FC = () => {

  const [state, dispatch] = useReducer(reducer, store);

  return (
    <div>
      <p>{state.count}</p>
      {/* value 为子孙组件通过 useContext 所取到的值 */}
      <Context.Provider value={[state, dispatch]}>
        <Decrement />
        <Increment />
      </Context.Provider>
    </div>
  )
}

export default ReduxDemo;