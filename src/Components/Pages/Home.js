import React, { Fragment } from "react";
import classes from "./Home.module.css";

const Home = () => {
  const style = {
    fontStyle: "italic",
    color: "var(--orangeFont)",
  };

  return (
    <Fragment>
      <section className={classes.homeSection}>
        <h1 className={classes.welcome}>
          <span style={style}>Footie Stats</span> - all TOP 5 european leagues
          in one place!
        </h1>
      </section>
      <section></section>
    </Fragment>
  );
};

export default Home;
