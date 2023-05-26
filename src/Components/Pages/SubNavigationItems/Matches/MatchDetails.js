import React from "react";
import classes from "./MatchDetails.module.css";
import { useState } from "react";

const MatchDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const toggleActiveTab = (id) => {
    setActiveTab();
  };
  return (
    <div>
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
    </div>
  );
};

export default MatchDetails;
