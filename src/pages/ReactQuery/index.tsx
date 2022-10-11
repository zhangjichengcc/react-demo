/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:11:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-11 19:04:00
 * @FilePath: \react-demo\src\pages\ReactQuery\index.tsx
 */
import { FC, memo } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import HighLight from '@/components/HighLight';
import Simple from './Simple';

const Memo: FC = memo(() => {

  return <div>
    <PageHead>react-query</PageHead>
    <PageInfo>React Query 因其极大地简化了 React 应用程序中的数据获取而受到许多人的喜爱。但是它并不是数据获取库，它应该叫异步状态管理器,它可以管理任何形式的异步状态——只要它得到一个 Promise。</PageInfo>

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
          
            console.log('Parent is updated');
          
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
      <Simple />
    </PageDemo>
  </div>
})

export default Memo;