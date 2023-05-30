import React, { Fragment } from "react";
import classes from "./HomepageNavbar.module.css";
import HomepageNavbarItem from "./HomepageNavbarItem";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { SiPremierleague } from "react-icons/si";

const HomepageNavbar = () => {
  const location = useLocation();
  const navbarClass =
    location.pathname === "/" ? classes.homepageNavbar : classes.leagueNavbar;

  const navbarListClass =
    location.pathname === "/"
      ? classes.homepageNavbarList
      : classes.leagueNavbarList;

  const navbarLogoClass =
    location.pathname === "/" ? classes.homepageLogo : classes.leagueLogo;

  const LEAGUES = [
    {
      name: "Premier League",
      id: "1",
      link: "premierleague",
      logo: "https://seeklogo.com/images/N/new-premier-league-2016-17-logo-DC3F7B1BB9-seeklogo.com.png",
    },
    { name: "Bundesliga", id: "2", link: "bundesliga" },
    { name: "La Liga", id: "3", link: "laliga" },
    { name: "Serie A", id: "4", link: "seriea" },
    { name: "Ligue 1", id: "5", link: "ligue1" },
  ];

  return (
    <Fragment>
      <nav className={navbarClass}>
        <Link to="" className={navbarLogoClass}>
          LOGO
        </Link>
        <ul className={navbarListClass}>
          {LEAGUES.map((league) => {
            return (
              <HomepageNavbarItem
                to={`${league.link}/matches`}
                key={league.id}
                name={league.name}
                link={league.link}
                location={location}
                logo={league.logo}
              />
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default HomepageNavbar;
