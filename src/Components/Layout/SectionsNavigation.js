import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LeagueContext from "../Store/league-context";
import classes from "./SectionsNavigation.module.css";
import { TbSoccerField } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { RiListOrdered } from "react-icons/ri";

const SectionsNavigation = () => {
  const { league } = useContext(LeagueContext);

  return (
    <aside className={classes.asideNavigation}>
      <Link
        className={classes.asideNavigationItemLink}
        to={`/${league}/matches`}
      >
        <p>
          <TbSoccerField />
        </p>
        <p>Matches</p>
      </Link>
      <Link className={classes.asideNavigationItemLink} to={`/${league}/table`}>
        <p>
          <RiListOrdered />
        </p>
        <p>Table</p>
      </Link>
      <Link
        className={classes.asideNavigationItemLink}
        to={`/${league}/statistics`}
      >
        <p>
          <IoStatsChart />
        </p>
        <p>Statistics</p>
      </Link>
    </aside>
  );
};

export default SectionsNavigation;
