import React from "react";
import { useParams } from "react-router";

const Statistics = () => {
  const { leagueId } = useParams();
  return <div>Statistics section of league in {leagueId}.</div>;
};

export default Statistics;
