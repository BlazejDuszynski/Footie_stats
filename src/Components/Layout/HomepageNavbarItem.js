import React from "react";
import { NavLink } from "react-router-dom";
import LeagueContext from "../Store/league-context";
import { useContext } from "react";
import classes from "./HomepageNavbarItem.module.css";

const HomepageNavbarItem = (props) => {
  const { selectLeague } = useContext(LeagueContext);

  const navItemClass =
    props.location.pathname === "/"
      ? classes.homepageNavItemClass
      : classes.leaguesNavItemClass;

  const selectLeagueHandler = () => {
    selectLeague(props.link);
  };

  return (
    <li className={classes.navItem}>
      <NavLink
        className={navItemClass}
        onClick={selectLeagueHandler}
        to={props.to}
      >
        {props.location.pathname === "/" ? (
          props.name
        ) : (
          <p className={classes.navItemLogo}>{props.name}</p>
        )}
      </NavLink>
    </li>
  );
};

export default HomepageNavbarItem;
