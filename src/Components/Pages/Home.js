import React, { Fragment } from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const h1style = {
    fontStyle: "italic",
    color: "var(--orangeFont)",
  };

  const paragraphStyle = {
    color: "var(--blueFont)",
  };

  return (
    <Fragment>
      <section className={classes.welcomeSection}>
        <h1 className={classes.welcome}>
          <span style={h1style}>Footie Stats</span> - all TOP 5 european leagues
          in one place!
        </h1>
        <p className={classes.welcomeParagraph}>
          <span style={paragraphStyle}>Footie Stats </span> - web app where
          football fan can check match results, schedule and statistics of his
          favourite team or player of the best european leagues.
        </p>
      </section>
      <section className={classes.leaguesSection}>
        <header className={classes.leaguesSection__header}>
          CHOOSE A LEAGUE
        </header>
        <div className={classes.leaguesGridContainer}>
          <Link className={classes.gridItem}>
            <p>Premier League</p>
          </Link>
          <Link className={classes.gridItem}>
            <p>Premier League</p>
          </Link>
          <Link className={classes.gridItem}>
            <p>Premier League</p>
          </Link>
          <Link className={classes.gridItem}>
            <p>Premier League</p>
          </Link>
          <Link className={classes.gridItem}>
            <p>Premier League</p>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
