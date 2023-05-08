import React from "react";
import classes from "./MatchesItem.module.css";

const MatchesItem = (props) => {
  return (
    <div className={classes.matchesItem}>
      <div title={props.homeTeamName} className={classes.teamInfo}>
        <p className={classes.homeTeamAbbr}>{props.homeTeamName}</p>
        <img className={classes.teamLogo} alt="" src={props.homeTeamLogo} />
      </div>
      {props.matchStatusName === "Finished" ? (
        <div className={classes.matchResult}>
          <p>{props.homeTeamScore}</p>
          <p>:</p>
          <p>{props.awayTeamScore}</p>
        </div>
      ) : (
        <p className={classes.matchResult}>VS</p>
      )}

      <div title={props.awayTeamName} className={classes.teamInfo}>
        <img className={classes.teamLogo} alt="" src={props.awayTeamLogo} />
        <p className={classes.awayTeamAbbr}>{props.awayTeamName}</p>
      </div>
    </div>
  );
};

export default MatchesItem;
