import React from "react";

const LeagueContext = React.createContext({
  league: "",
  selectLeague: () => {},
});

export default LeagueContext;
