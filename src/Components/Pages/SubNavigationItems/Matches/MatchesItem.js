import React from "react";
import classes from "./MatchesItem.module.css";

const MatchesItem = (props) => {
  return (
    <div className={classes.matchesItem}>
      <div title={props.homeTeamName} className={classes.teamInfo}>
        <p className={classes.homeTeamAbbr}>{props.homeTeamAbbr}</p>
        <img className={classes.teamLogo} alt="" src={props.homeTeamLogo} />
      </div>
      <div></div>
      <div title={props.awayTeamName} className={classes.teamInfo}>
        <img className={classes.teamLogo} alt="" src={props.awayTeamLogo} />
        <p className={classes.awayTeamAbbr}>{props.awayTeamAbbr}</p>
      </div>
    </div>
  );
};

export default MatchesItem;
