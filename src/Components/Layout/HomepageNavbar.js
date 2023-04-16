import React from "react";
import classes from "./HomepageNavbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <NavLink
          to="PremierLeague"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Premier League</li>
        </NavLink>
        <NavLink
          to="Bundesliga"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Bundesliga</li>
        </NavLink>
        <NavLink
          to="LaLiga"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>La Liga</li>
        </NavLink>
        <NavLink
          to="SerieA"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Serie A</li>
        </NavLink>
        <NavLink
          to="Ligue1"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Ligue 1</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
