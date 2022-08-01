/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:33:20
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 10:27:31
 * @FilePath: \webpack-demo\src\pages\UseReducer\index.tsx
 */
import { FC } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import Counter from './Counter';
import ReduxDemo from './ReduxDemo';


const Demo: FC = () => {

  return <div>
    <PageHead>useReducer</PageHead>
    <PageInfo>useReducer 是 react-hooks 提供的能够在无状态组件中运行的类似 redux 的功能 api 。</PageInfo>
    
    <PageDemo title="Counter 计数器">
      <Counter />
    </PageDemo>

    <PageDemo title="Reducer + useContext 实现 Redux">
      <ReduxDemo />
    </PageDemo>
  </div>
}

export default Demo;