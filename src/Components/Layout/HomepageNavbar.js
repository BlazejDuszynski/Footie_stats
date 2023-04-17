import React, { Fragment } from "react";
import classes from "./HomepageNavbar.module.css";
import HomepageNavbarItem from "./HomepageNavbarItem";
import { useLocation } from "react-router";

const HomepageNavbar = () => {
  const location = useLocation();
  console.log(location);

  const navbarClass =
    location.pathname === "/"
      ? classes.homepageNavbarClass
      : classes.leagueNavbarClass;

  const LEAGUES = [
    { name: "Premier League", id: "1", link: "premierleague" },
    { name: "Bundesliga", id: "2", link: "bundesliga" },
    { name: "La Liga", id: "3", link: "laliga" },
    { name: "Serie A", id: "4", link: "seriea" },
    { name: "Ligue 1", id: "5", link: "ligue1" },
  ];

  return (
    <Fragment>
      <nav className={navbarClass}>
        <a>LOGO</a>
        <ul className={classes.navbarList}>
          {LEAGUES.map((league) => {
            return (
              <HomepageNavbarItem
                to={`${league.link}/matches`}
                key={league.id}
                name={league.name}
                link={league.link}
                location={location}
              />
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default HomepageNavbar;
