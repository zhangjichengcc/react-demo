/*
 * @Author: zhangjicheng
 * @Date: 2022-09-17 18:16:34
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-17 18:19:41
 * @FilePath: \webpack-demo\src\pages\UseMemo\Parent.tsx
 */
import { FC, useState } from 'react';

const Parent: FC = () => {

  const [count, setCount] = useState(0);

  function handleClick() {
    
  }

  return (
    <div>
      
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default Parent;