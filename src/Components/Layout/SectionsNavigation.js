import React from "react";
import { Link } from "react-router-dom";

const SectionsNavigation = () => {
  const leagueId = "PremierLeague";

  return (
    <div>
      <Link to={`/${leagueId}/matches`}>Matches</Link>
      <Link to={`/${leagueId}/table`}>Table</Link>
      <Link to={`/${leagueId}/statistics`}>Statistics</Link>
    </div>
  );
};

export default SectionsNavigation;
