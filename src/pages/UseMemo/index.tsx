/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:11:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-24 19:11:29
 * @FilePath: \webpack-demo\src\pages\UseMemo\index.tsx
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

    <pre>
      <code className="language-html">
        {`
          var a = 1;
          var b = 2;
          function name(params:type) {
            return params;
          }
        `}
      </code>
    </pre>
  </div>
})

export default Memo;