import React from 'react';
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


export const loader = async () => {
  return null;
  const response = await customFetch.get("/jobs/stats");
  return response.data;
};

function Stats() {
   //const { defaultStats, monthlyApplications } = useLoaderData();
  const { isLoading, isError, data } = useQuery(statsQuery);
   const response = useQuery({
     queryKey: ["stats"],
     queryFn: () => customFetch.get("/jobs/stats"),
   });
   console.log(response);
  return <h1>react query</h1>;
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}

export default Stats;