/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQueries } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Spin } from "antd";
import axios from "../../utils/axios";
import { result } from "lodash";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const results = useQueries([
    {
      queryKey: ["post", 1],
      queryFn: () =>
        axios.get("").then((res) => {
          return res.data;
        }),
    },
    {
      queryKey: ["post", 2],
      queryFn: () =>
        axios.get("").then((res) => {
          return res.data;
        }),
    },
  ]);

  if(results[0].isLoading) return "loading 1"

  
  if(results[1].isLoading) return "loading 2"
  return (
    <div>
        {results[0].data.url}
        {results[1].data.tags_url}
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
