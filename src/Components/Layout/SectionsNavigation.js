import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LeagueContext from "../Store/league-context";
import classes from "./SectionsNavigation.module.css";
import { TbSoccerField } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { RiListOrdered } from "react-icons/ri";

const SectionsNavigation = () => {
  const { league } = useContext(LeagueContext);
  console.log(league);

  return (
    <aside className={classes.asideNavigation}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? classes.asideNavigationItemLinkActive
            : classes.asideNavigationItemLink
        }
        to={`/${league}/matches`}
      >
        <p>
          <TbSoccerField />
        </p>
        <p>Matches</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? classes.asideNavigationItemLinkActive
            : classes.asideNavigationItemLink
        }
        to={`/${league}/table`}
      >
        <p>
          <RiListOrdered />
        </p>
        <p>Table</p>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? classes.asideNavigationItemLinkActive
            : classes.asideNavigationItemLink
        }
        to={`/${league}/statistics`}
      >
        <p>
          <IoStatsChart />
        </p>
        <p>Statistics</p>
      </NavLink>
    </aside>
  );
};

export default SectionsNavigation;
