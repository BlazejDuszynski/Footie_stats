import React from "react";
import { useParams } from "react-router";
import classes from "./Statistics.module.css"

const Statistics = () => {
  const { leagueId } = useParams();
  return <div className={classes.statisticsSection}>Statistics section of league in {leagueId}.</div>;
};

export default Statistics;
