import React from "react";
import { useParams } from "react-router";

const Matches = () => {
  const { leagueId } = useParams();

  return <div>Matches section of league in {leagueId}.</div>;
};

export default Matches;
