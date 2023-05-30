import React from "react";
import classes from "./LineupsItem.module.css";

const LineupsItem = (props) => {
  return (
    <li className={classes.lineupsItem}>
      <p className={classes.lineupsItem__number}>{props.playerNumber}.</p>
      <p>{props.playerName}</p>
    </li>
  );
};

export default LineupsItem;
