import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LeagueContext from "../Store/league-context";
import classes from "./SectionsNavigation.module.css";


const SectionsNavigation = () => {
  const { league } = useContext(LeagueContext);

  return (
    <aside className={classes.asideNavigation}>
      <Link to={`/${league}/matches`}>
        <p>TbSoccerField</p>
        <p>Matches</p>
      </Link>
      <Link to={`/${league}/table`}>Table</Link>
      <Link to={`/${league}/statistics`}>Statistics</Link>
    </aside>
  );
};

export default SectionsNavigation;
