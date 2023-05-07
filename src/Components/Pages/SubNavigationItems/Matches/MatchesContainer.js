import React, { Fragment } from "react";
import classes from "./MatchesContainer.module.css";
import MatchesItem from "./MatchesItem";

const MatchesContainer = ({ matches }) => {
  console.log(matches);
  return (
    <Fragment>
      {matches === undefined ? (
        <div className={classes.noItemsContainer}>
          <img
            alt="A person who cannot find anything in the box"
            src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png?f=webp"
            className={classes.noMatchesImage}
          />
          <p className={classes.noMatchesText}>No matches found </p>
        </div>
      ) : (
        <section className={classes.matchesContainer}>
          {matches.map((match) => {
            return <MatchesItem />;
          })}
        </section>
      )}
    </Fragment>
  );
};

export default MatchesContainer;
