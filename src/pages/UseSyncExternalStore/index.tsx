/*
 * @Author: zhangjicheng
 * @Date: 2022-08-02 14:43:58
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-02 17:11:24
 * @FilePath: \webpack-demo\src\pages\UseSyncExternalStore\index.tsx
 */
import { FC, useSyncExternalStore } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import store from './numberReducer';


const Demo: FC = () => {

  const state = useSyncExternalStore(store.subscribe, () => store.getState());

  console.log(state);

  return <div>
    <PageHead>useSyncExternalStore</PageHead>
    <PageInfo>useSyncExternalStore 能够让 React 组件在 concurrent 模式下安全地有效地读取外接数据源，在组件渲染过程中能够检测到变化，并且在数据源发生变化的时候，能够调度更新。当读取到外部状态发生了变化，会触发一个强制更新，来保证结果的一致性。</PageInfo>
    
    <PageDemo title="useSyncExternalStore 基础用法">
      <p>number: {state.number}</p>
      <button onClick={() => {}}>add</button>
      <button>del</button>
    </PageDemo>
  </div>
}

export default Demo;