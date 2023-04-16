import React, { useContext } from "react";
import classes from "./HomepageNavbar.module.css";
import HomepageNavbarItem from "./HomepageNavbarItem";

const Navbar = () => {
  const LEAGUES = [
    { name: "Premier League", id: "1", link: "premierleague" },
    { name: "Bundesliga", id: "2", link: "bundesliga" },
    { name: "La Liga", id: "3", link: "laliga" },
    { name: "Serie A", id: "4", link: "seriea" },
    { name: "Ligue 1", id: "5", link: "ligue1" },
  ];

  return (
    <nav className={classes.navbar}>
      <ul>
        {LEAGUES.map((league) => {
          return (
            <HomepageNavbarItem
              to={`${league.link}/matches`}
              key={league.id}
              name={league.name}
              link={league.link}
            />
          );
        })}
        {/* <NavLink
          to="PremierLeague/matches"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Premier League</li>
        </NavLink>
        <NavLink
          to="Bundesliga/matches"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Bundesliga</li>
        </NavLink>
        <NavLink
          to="LaLiga/matches"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>La Liga</li>
        </NavLink>
        <NavLink
          to="SerieA/matches"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Serie A</li>
        </NavLink>
        <NavLink
          to="Ligue1/matches"
          // className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Ligue 1</li>
        </NavLink> */}
      </ul>
    </nav>
  );
};

export default Navbar;
