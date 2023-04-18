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
          <span style={h1style}>Footie Stats</span> - TOP 5 european leagues
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
          <Link to="premierleague/matches" className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://e0.365dm.com/18/12/2048x1152/skysports-graphic-salah-sterling_4529251.jpg"
            ></img>
            <p className={classes.leagueName}>Premier League</p>
          </Link>
          <Link to="laliga/matches" className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://pbs.twimg.com/media/FfMG2GIXgAIRsIB.jpg:large"
            ></img>
            <p className={classes.leagueName}>La Liga</p>
          </Link>
          <Link to="bundesliga/matches" className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://fantomsportsindustries.com/wp-content/uploads/2023/02/skysports-bundesliga-bayern_6067185.jpg"
            ></img>
            <p className={classes.leagueName}>Bundesliga</p>
          </Link>
          <Link to="seriea/matches" className={classes.gridItem}>
            <img
              className={classes.leagueImage}
              src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltef5ed04b33c80b7b/62f3dc7b00626810a9be53d6/cf5305df-3783-4d04-82c4-e3fd66b69155.jpg"
            ></img>
            <p className={classes.leagueName}>Serie A</p>
          </Link>
          <Link to="ligue1/matches" className={classes.gridItem}>
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
