/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:11:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-30 16:57:55
 * @FilePath: \webpack5.0-demo\src\pages\UseMemo\index.tsx
 */
import { FC, memo } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import HighLight from '@/components/HighLight';
import Demo1 from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';

const Memo: FC = memo(() => {

  console.log('666')

  return <div>
    <PageHead>useMemo</PageHead>
    <PageInfo>一句话概括：memo、useMemo、useCallBack主要用于避免React Hooks中的重复渲染，作为性能优化的一种手段，三者需要组合并结合场景使用。</PageInfo>
    
    <PageDemo title="default">
      <HighLight>
        {`
          const Child1: FC<{onClick: () => void}> = (props) => {
  
            const { onClick } = props;
          
            console.log('Child1 is updated');
          
            return (
              <div>
                <i>use props onClick, but onClick is not change</i><br />
                <button onClick={onClick}>add</button>
              </div>
            )
          }
          
          const Child2: FC = () => {
          
            console.log('Child2 is updated');
          
            return (
              <div>
                <i>no use props</i>
                <p>Child2</p>
              </div>
            )
          }
          
          const Parent: FC = () => {
          
            console.log('Parent is updated')
          
            const [count, setCount] = useState(0);
          
            function handleClick() {
              setCount(count + 1);
            }
          
            return (
              <div>
                <p>count：{count}</p>
                <Child1 onClick={handleClick} />
                <Child2 />
              </div>
            )
          }
        `}
      </HighLight>
      <Demo1 />
    </PageDemo>

    <PageDemo title="memo">
      <Demo2 />
    </PageDemo>

    <PageDemo title="useMemo">
      <Demo3 />
    </PageDemo>

    <HighLight>
      {`
        var a = 1;
        var b = 2;
        function name(params:type) {
          return params;
        }

        interface Props {
          a: string;
        }


        <div>
          aaa
        </div>
      `}
    </HighLight>
  </div>
})

export default Memo;