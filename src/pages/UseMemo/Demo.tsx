/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:16:34
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-24 18:11:36
 * @FilePath: \webpack-demo\src\pages\UseMemo\Demo.tsx
 */
import { FC, useState } from 'react';

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

export default Parent;