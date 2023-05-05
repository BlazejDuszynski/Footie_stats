import React from "react";
import classes from "./MatchesContainer.module.css";
import MatchesItem from "./MatchesItem";

const MatchesContainer = () => {
  return <section className={classes.matchesContainer}>
    <MatchesItem />
    <MatchesItem />
    <MatchesItem />
  </section>;
};

export default MatchesContainer;
