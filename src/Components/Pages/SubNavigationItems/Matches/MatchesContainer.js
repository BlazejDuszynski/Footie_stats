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
            const logo = match.group_name + " logo";
            let matchStatusClass;
            let matchStatusName;
            switch (match.status_name) {
              case "Finished":
                matchStatusClass =
                  classes.statusFinished + " " + classes.matchStatus;
                matchStatusName = match.status_name;
                break;
              case "Postponed":
                matchStatusClass =
                  classes.statusPostponed + " " + classes.matchStatus;
                matchStatusName = match.status_name;
                break;
              case "Inplay":
                matchStatusClass =
                  classes.statusNotFinished + " " + classes.matchStatus;
                matchStatusName = "In play";
                break;
              case "Notstarted":
                matchStatusClass =
                  classes.statusNotFinished + " " + classes.matchStatus;
                matchStatusName = "Not started";
                break;
              case null:
                matchStatusClass =
                  classes.statusNotFinished + " " + classes.matchStatus;
                matchStatusName = "In play";
                break;
            }
            return (
              <div className={classes.matchContainer}>
                <div className={classes.leagueSummaryContainer}>
                  <p>Matchday {match.round_name}</p>
                  <img
                    className={classes.leagueFlagImage}
                    alt={logo}
                    src={match.league.country_flag}
                  />
                </div>
                <p className={matchStatusClass}>{matchStatusName}</p>
                <MatchesItem />
              </div>
            );
          })}
        </section>
      )}
    </Fragment>
  );
};

export default MatchesContainer;
