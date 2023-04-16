import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LeagueContext from "../Store/league-context";

const SectionsNavigation = () => {
  const { league } = useContext(LeagueContext);

  return (
    <div>
      <Link to={`/${league}/matches`}>Matches</Link>
      <Link to={`/${league}/table`}>Table</Link>
      <Link to={`/${league}/statistics`}>Statistics</Link>
    </div>
  );
};

export default SectionsNavigation;
