/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:33:20
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-10 19:03:42
 * @FilePath: \react-demo\src\pages\UseReducer\index.tsx
 */
import { FC } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import Counter from './Counter';
import ReduxDemo from './ReduxDemo';
import HighLight from '@/components/HighLight';


const Demo: FC = () => {

  return <div>
    <PageHead>useReducer</PageHead>
    <PageInfo>useReducer 是 react-hooks 提供的能够在无状态组件中运行的类似 redux 的功能 api 。</PageInfo>
    
    <PageDemo title="Counter 计数器">
      <HighLight>
        {`
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
        `}
      </HighLight>
      <Counter />
    </PageDemo>

    <PageDemo title="Reducer + useContext 实现 Redux">
      <HighLight>
        {`
          /** context.ts */
          
          import { createContext, Dispatch } from "react";

          /** Context 状态 */
          interface Store {
            /** count 数值 */
            count: number,
            /** 其他状态 */
            [key: string]: any,
          }

          /** Action */
          type ReducerAction = {
            type: 'set' | 'get';
            payload: {
              [key: keyof Store]: any
            };
          }

          /** Context 实体，包含 Store 状态 和 dispatch 方法 */
          type ContextProps = [
            /** store 状态 */
            store: Store,
            /** dispatch 方法 */
            dispatch: Dispatch<ReducerAction>,
          ]

          /** 默认store */
          const store = {
            count: 0,
          }

          /** 初始化 context */ 
          const initContext: ContextProps = [
            /** count */
            store,
            null
          ]

          const Context = createContext(initContext);

          function reducer(state: Store, action: ReducerAction) {
            const { type, payload } = action;
            switch (type) {
              case 'set': {
                return {
                  ...state,
                  ...payload,
                }
              }
              case 'get': {
                return state;
              }
              default: {
                return state;
              }
            }
          }

          export default Context;

          export {
            store,
            reducer,
          }



          /* --------------------------------------------------------------------------- */

          /** Decrement.tsx */
          
          import { FC, useContext } from 'react';
          import Context from './context';

          const Decrement: FC = () => {

            const [store, dispatch] = useContext(Context);

            return (
              <button onClick={() => dispatch({type: 'set', payload: {count: store.count - 1}})}>-</button>
            )
          }

          export default Decrement;



          /* --------------------------------------------------------------------------- */

          /** Increment.tsx */

          import { FC, useContext } from 'react';
          import Context from './context';

          const Increment: FC = () => {

            const [store, dispatch] = useContext(Context);;

            return (
              <button onClick={() => dispatch({type: 'set', payload: {count: store.count + 1}})}>+</button>
            )
          }

          export default Increment;



          /* --------------------------------------------------------------------------- */

          /** index.tsx */

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
        `}
      </HighLight>
      <ReduxDemo />
    </PageDemo>
  </div>
}

export default Demo;