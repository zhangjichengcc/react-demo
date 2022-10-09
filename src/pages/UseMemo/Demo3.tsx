/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:16:34
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-09 17:52:15
 * @FilePath: \webpack5.0-demo\src\pages\UseMemo\Demo3.tsx
 */
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