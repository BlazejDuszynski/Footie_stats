import React, { Fragment } from "react";
import classes from "./MatchesContainer.module.css";
import MatchesItem from "./MatchesItem";

const MatchesContainer = ({ matches }) => {
  console.log(matches);
  return (
    <Fragment>
      {matches.length === 0 ? (
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
            let lastSpaceIndex = match.league.round.lastIndexOf(" ");
            let matchdayNumber = match.league.round.substr(lastSpaceIndex + 1);
            const logo = match.league.name + " logo";
            let matchStatusClass;
            let matchStatusName;
            switch (match.fixture.status.short) {
              case "FT":
                matchStatusClass =
                  classes.statusFinished + " " + classes.matchStatus;
                matchStatusName = "Finished";
                break;
              case "Postponed":
                matchStatusClass =
                  classes.statusPostponed + " " + classes.matchStatus;
                matchStatusName = match.fixture.status.long;
                break;
              case "1H":
                matchStatusClass =
                  classes.statusNotFinished + " " + classes.matchStatus;
                matchStatusName = "In play";
                break;
              case "NS":
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
                  <p>{`Matchday ${matchdayNumber}`}</p>
                  <img
                    className={classes.leagueFlagImage}
                    alt={logo}
                    src={match.league.flag}
                  />
                </div>
                <p className={matchStatusClass}>{matchStatusName}</p>
                <MatchesItem
                  gameweek={matchdayNumber}
                  matches={matches}
                  matchStatusName={matchStatusName}
                  homeTeamAbbr={match.teams.home.short_code}
                  homeTeamName={match.teams.home.name}
                  homeTeamLogo={match.teams.home.logo}
                  homeTeamId={match.teams.home.id}
                  homeTeamScore={match.goals.home}
                  awayTeamAbbr={match.teams.away.short_code}
                  awayTeamName={match.teams.away.name}
                  awayTeamLogo={match.teams.away.logo}
                  awayTeamId={match.teams.away.id}
                  awayTeamScore={match.goals.away}
                />
              </div>
            );
          })}
        </section>
      )}
    </Fragment>
  );
};

export default MatchesContainer;
