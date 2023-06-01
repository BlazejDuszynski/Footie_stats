import React from "react";
import classes from "./MatchDetails.module.css";
import { useState } from "react";
import Lineups from "./Lineups/Lineups";

const MatchDetails = ({ matchId }) => {
  const [activeTab, setActiveTab] = useState(1);
  const toggleActiveTab = (id) => {
    setActiveTab();
  };
  return (
    <div className={classes.matchDetailsContainer}>
      <header className={classes.matchDetailsHeader}>
        <ul>
          <li
            className={activeTab === 1 ? classes.active : null}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Lineups
          </li>
          <li
            className={activeTab === 2 ? classes.active : null}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Statistics
          </li>
        </ul>
      </header>
      {activeTab === 1 && <Lineups matchId={matchId} />}
      {/* {activeTab === 2 && <Lineups />} */}
    </div>
  );
};

export default MatchDetails;
