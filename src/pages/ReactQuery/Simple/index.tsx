/*
 * @Author: zhangjicheng
 * @Date: 2022-10-11 18:42:29
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-11 18:56:13
 * @FilePath: \react-demo\src\pages\ReactQuery\Simple\index.tsx
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Example from "./Example";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

