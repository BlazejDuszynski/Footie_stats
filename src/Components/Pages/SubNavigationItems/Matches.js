import React from "react";
import { useParams } from "react-router";
import classes from "./Matches.module.css";

const Matches = () => {
  const { leagueId } = useParams();

  return (
    <div className={classes.matchesSection}>
      Matches section of league in {leagueId}.
    </div>
  );
};

export default Matches;
