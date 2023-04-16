import React, { useState } from "react";
import LeagueContext from "./league-context";

const LeagueProvider = ({ children }) => {
  const [selectedLeague, setSelectedLeague] = useState("");

  const selectLeagueHandler = (league) => {
    setSelectedLeague(league);
  };

  console.log(selectedLeague);

  const leagueContext = {
    league: selectedLeague,
    selectLeague: selectLeagueHandler,
  };

  return (
    <LeagueContext.Provider value={leagueContext}>
      {children}
    </LeagueContext.Provider>
  );
};

export default LeagueProvider;
