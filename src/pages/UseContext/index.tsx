/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 10:28:01
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 17:28:08
 * @FilePath: \webpack-demo\src\pages\UseContext\index.tsx
 */
import { FC } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import StaticContext from './StaticContext';
import ActiveContext from './ActiveContext';

const Demo: FC = () => {

  return <div>
    <PageHead>useContext</PageHead>
    <PageInfo>Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</PageInfo>
    
    <PageDemo title="静态 context">
      <StaticContext />
    </PageDemo>

    <PageDemo title="静态 context">
      <ActiveContext />
    </PageDemo>

  </div>
}

export default Demo;