/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:11:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-21 00:17:38
 * @FilePath: /webpack5.0-demo/src/pages/UseMemo/index.tsx
 */
import { FC, memo } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import Demo1 from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';

const Memo: FC = memo(() => {

  console.log('666')

  return <div>
    <PageHead>useMemo</PageHead>
    <PageInfo>一句话概括：memo、useMemo、useCallBack主要用于避免React Hooks中的重复渲染，作为性能优化的一种手段，三者需要组合并结合场景使用。</PageInfo>
    
    <PageDemo title="default">
      <Demo1 />
    </PageDemo>

    <PageDemo title="memo">
      <Demo2 />
    </PageDemo>

    <PageDemo title="useMemo">
      <Demo3 />
    </PageDemo>
  </div>
})

export default Memo;