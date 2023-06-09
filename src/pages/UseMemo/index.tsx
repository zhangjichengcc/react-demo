/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:11:32
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2023-06-09 18:13:44
 * @FilePath: /react-demo/src/pages/UseMemo/index.tsx
 */
import { FC, memo } from "react";
import PageHead from "@components/PageHead";
import PageInfo from "@components/PageInfo";
import PageDemo from "@/components/PageDemo";
import HighLight from "@/components/HighLight";
import Demo1 from "./Demo";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

const Memo: FC = memo(() => {
  return (
    <div>
      <PageHead>useMemo</PageHead>
      <PageInfo>
        一句话概括：memo、useMemo、useCallBack主要用于避免React
        Hooks中的重复渲染，作为性能优化的一种手段，三者需要组合并结合场景使用。
      </PageInfo>
      <PageInfo>
        useCallBack和useMemo唯一的区别是：useMemo返回的是传入的回调函数的执行结果，useCallBack返回的是传入的回调函数。本质上就是useMemo的语法糖。
      </PageInfo>
      <PageInfo>
        注意：不要滥用useMemo、useCallBack、使用useMemo、useCallBack时，本身会产生额外的开销，并且这两个方法必须和memo搭配使用，否则很可能会变成负优化。因此，在实际项目中，需要结合实际场景，评估重复渲染和创建useCallBack/useMemo的开销来判断到底用不用useCallBack、useMemo。
      </PageInfo>

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
        <Demo1 />
      </PageDemo>

      <PageDemo title="memo">
        <HighLight>
          {`
          import { FC, useState, memo } from 'react';

          const Child1: FC<{onClick: () => void}> = memo((props) => {
            
            const { onClick } = props;

            console.log('Child1 is updated');

            return (
              <div>
                <i>use props onClick</i><br />
                <button onClick={onClick}>add</button>
              </div>
            )
          })

          const Child2: FC = memo(() => {

            console.log('Child2 is updated');

            return (
              <div>
                <i>no use props</i>
                <p>Child2</p>
              </div>
            )
          })

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
        <Demo2 />
      </PageDemo>

      <PageDemo title="useMemo">
        <HighLight>
          {`
          import { FC, useState, memo, useMemo, useCallback } from 'react';

          const Child1: FC<{onClick: () => void}> = memo((props) => {
            
            const { onClick } = props;
          
            console.log('Child1 is updated');
          
            return (
              <div>
                <i>use props onClick</i><br />
                <button onClick={onClick}>add</button>
              </div>
            )
          })
          
          const Child2: FC = memo(() => {
          
            console.log('Child2 is updated');
          
            return (
              <div>
                <i>no use props</i>
                <p>Child2</p>
              </div>
            )
          })
          
          const Parent: FC = () => {
          
            console.log('Parent is updated')
          
            const [count, setCount] = useState(0);
          
            //? handleClick方法内部本身没有依赖任何变量，因此它的依赖数组项为空。
            const handleClick = useCallback(() => {
              setCount((pre) => pre + 1);
            }, []);
          
            //? useCallBack 为 useMemo 的语法糖，以上写法作用相同
            // const handleClick = useMemo(() => () => {
            //   setCount((pre) => pre + 1);
            // }, [])
          
            return (
              <div>
                <p>count：{count}</p>
                <Child1 onClick={handleClick} />
                <Child2 />
              </div>
            )
          }
          
          export default Parent;
        `}
        </HighLight>
        <Demo3 />
      </PageDemo>
    </div>
  );
});

export default Memo;
