/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2023-08-07 10:03:19
 * @FilePath: /react-demo/src/pages/index.tsx
 */
import { FC } from "react";
import PageHead from "@/components/PageHead";
// import { Button, PopOver } from 'react-plugin';
// import PopOver from '@/components/PopOver'
import { NavLink } from "react-router-dom";
import ScrollWrapper from "@zhangjicheng/react-scroll-wrapper";

import styles from "./index.less";

const Index: FC = () => {
  return (
    <div className={styles.view}>
      <PageHead>React hooks</PageHead>
      <div style={{ height: 40, overflow: "hidden" }}>
        <ScrollWrapper direction="tb">
          <div className={styles.nav}>
            <NavLink to="/home">1. 首页</NavLink>
            <NavLink to="/useReducer">2. useReducer</NavLink>
            <NavLink to="/useContext">3. useContext</NavLink>
            <NavLink to="/useSyncExternalStore">
              4. useSyncExternalStore
            </NavLink>
            <NavLink to="/useMemo">5. useMemo</NavLink>
            <p>plugin</p>
            <NavLink to="/reactQuery">react-query</NavLink>
            {/* <Button>Button</Button>
          <PopOver /> */}
          </div>
        </ScrollWrapper>
      </div>
      <div className={styles.nav}>
        <NavLink to="/home">1. 首页</NavLink>
        <NavLink to="/useReducer">2. useReducer</NavLink>
        <NavLink to="/useContext">3. useContext</NavLink>
        <NavLink to="/useSyncExternalStore">4. useSyncExternalStore</NavLink>
        <NavLink to="/useMemo">5. useMemo</NavLink>
        <p>plugin</p>
        <NavLink to="/reactQuery">react-query</NavLink>
        {/* <Button>Button</Button>
      <PopOver /> */}
      </div>
    </div>
  );
};

export default Index;
