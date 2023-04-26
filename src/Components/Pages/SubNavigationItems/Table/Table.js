import React from "react";
import { useParams } from "react-router";
import classes from "./Table.module.css";

const Table = () => {
  const { leagueId } = useParams();
  return <div className={classes.tableSection}>Table section of league in {leagueId}.</div>;
};

export default Table;
