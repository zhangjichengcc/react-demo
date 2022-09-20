/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:16:34
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-21 00:18:34
 * @FilePath: /webpack5.0-demo/src/pages/UseMemo/Demo3.tsx
 */
import { FC, useState, memo, useMemo } from 'react';

const Child1: FC<{onClick: () => void}> = memo((props) => {
  
  const { onClick } = props;

  console.log('Demo-Child1 is updated');

  return (
    <div>
      <i>use props onClick</i><br />
      <button onClick={onClick}>add</button>
    </div>
  )
})

const Child2: FC = memo(() => {

  console.log('Demo-Child2 is updated');

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

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const handleClick = useMemo(() => () => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>count：{count}</p>
      <Child1 onClick={handleClick} />
      <Child2 />
    </div>
  )
}

export default Parent;