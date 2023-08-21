/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2023-08-21 18:16:35
 * @FilePath: /react-demo/src/pages/index.tsx
 */
import { FC, useEffect } from "react";
import PageHead from "@/components/PageHead";
import { Route, Link, Routes, useLocation, useRoutes } from "react-router-dom";
// import { Button, PopOver } from 'react-plugin';
// import PopOver from '@/components/PopOver'
import { NavLink } from "react-router-dom";
import ScrollWrapper from "@zhangjicheng/react-scroll-wrapper";

import styles from "./index.less";

const Index: FC = () => {
  return (
    <div className={styles.view}>
      <PageHead>React hooks</PageHead>
      <div className={styles.nav}>
        <NavLink to="/home">1. 首页</NavLink>
        <NavLink to="/useReducer">2. useReducer</NavLink>
        <NavLink to="/useContext">3. useContext</NavLink>
        <NavLink to="/useSyncExternalStore">4. useSyncExternalStore</NavLink>
        <NavLink to="/useMemo">5. useMemo</NavLink>
        <NavLink to="/useImperativeHandle">6. useImperativeHandle</NavLink>
        <p>plugin</p>
        <NavLink to="/reactQuery">react-query</NavLink>
      </div>
    </div>
  );
};

export default Index;
