/*
 * @Author: zhangjicheng
 * @Date: 2022-07-28 17:19:29
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-28 17:29:22
 * @FilePath: \webpack-demo\src\utils\lazyLoad.tsx
 */
import { Suspense, ReactNode } from 'react';
import LazyLoading from '@/components/LazyLoading';

/**
 * 页面懒加载方法
 * @param children loading 组件
 * @returns 
 */
function lazyLoad(children: ReactNode): ReactNode {

  return <Suspense fallback={<LazyLoading />}>
    {children}
  </Suspense>
}

export default lazyLoad;