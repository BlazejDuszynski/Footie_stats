import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <NavLink
          to="/PremierLeague"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>PremierLeague</li>
        </NavLink>
        <NavLink
          to="/Bundesliga"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Bundesliga</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
