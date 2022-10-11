/*
 * @Author: zhangjicheng
 * @Date: 2022-10-11 18:45:12
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-11 18:51:13
 * @FilePath: \react-demo\src\pages\ReactQuery\Simple\Example.tsx
 */
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Example: FC = () => {

  const { isLoading, error, data, isFetching } = useQuery(["repoData"], function() {
    return axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.data)
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{"An error has occurred: " + (error as any).message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
  
}

export default Example;