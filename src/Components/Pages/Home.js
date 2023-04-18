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
          football fan can check match results, schedules and statistics of his
          favourite team or player of the best european leagues.
        </p>
      </section>
      <section className={classes.leaguesSection}>
        <header className={classes.leaguesSection__header}>
          CHOOSE A LEAGUE
        </header>
        <div className={classes.leaguesGridContainer}>
          <Link className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://e0.365dm.com/18/12/2048x1152/skysports-graphic-salah-sterling_4529251.jpg"
            ></img>
            <p className={classes.leagueName}>Premier League</p>
          </Link>
          <Link className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://pbs.twimg.com/media/FfMG2GIXgAIRsIB.jpg:large"
            ></img>
            <p className={classes.leagueName}>La Liga</p>
          </Link>
          <Link className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://fantomsportsindustries.com/wp-content/uploads/2023/02/skysports-bundesliga-bayern_6067185.jpg"
            ></img>
            <p className={classes.leagueName}>Bundesliga</p>
          </Link>
          <Link className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://theanalyst.com/wp-content/uploads/2023/02/rafael-leao-stats-milan-1024x715.jpg"
            ></img>
            <p className={classes.leagueName}>Serie A</p>
          </Link>
          <Link className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://e0.pxfuel.com/wallpapers/478/35/desktop-wallpaper-psg-match-schedule-when-is-lionel-messi-playing-for-paris-saint-germain-sporting-news-messi-neymar-mbappe-psg.jpg"
            ></img>
            <p className={classes.leagueName}>Ligue 1</p>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
