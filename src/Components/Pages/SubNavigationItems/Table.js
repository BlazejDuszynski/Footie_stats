import React from "react";
import { useParams } from "react-router";

const Table = () => {
  const { leagueId } = useParams();
  return <div>Table section of league in {leagueId}.</div>;
};

export default Table;
