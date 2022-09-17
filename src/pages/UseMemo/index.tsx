/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:11:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-17 18:19:42
 * @FilePath: \webpack-demo\src\pages\UseMemo\index.tsx
 */
import { FC } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';

const Demo: FC = () => {

  return <div>
    <PageHead>useMemo</PageHead>
    <PageInfo>一句话概括：memo、useMemo、useCallBack主要用于避免React Hooks中的重复渲染，作为性能优化的一种手段，三者需要组合并结合场景使用。</PageInfo>
    
    <PageDemo title="memo">
      
    </PageDemo>
  </div>
}

export default Demo;