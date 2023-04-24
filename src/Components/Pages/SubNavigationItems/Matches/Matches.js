import React from "react";
import { useParams } from "react-router";
import classes from "./Matches.module.css";

const Matches = () => {
  const { league } = useParams();

  return (
    <div className={classes.matchesSection}>
      {/* <div></div> */}
      <header>{league}</header>
      <p>Calendar</p>
    </div>
  );
};

export default Matches;
