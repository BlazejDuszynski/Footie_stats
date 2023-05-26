import React, { Fragment } from "react";
import classes from "./MatchModal.module.css";
import { MdClose } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { useParams } from "react-router";
import leaguesIDs from "../leaguesIDs";
import MatchDetails from "./MatchDetails";

const MatchModal = (props) => {
  const { leagueId } = useParams();
  const leagueName = leaguesIDs.find(
    ({ paramsId }) => paramsId === leagueId
  )?.name;
  const matchDate = new Date(props.date);
  const formattedDate = matchDate.toLocaleDateString("pl-PL");
  const formattedTime = matchDate.toLocaleTimeString("pl-PL", {
    timeStyle: "short",
  });
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
      <div className={classes.matchModal}>
        <div className={classes.topBar}>
          <button className={classes.closeButton} onClick={props.onCloseModal}>
            <MdClose />
          </button>
        </div>
        <main className={classes.matchModalMainContent}>
          <header className={classes.matchModalHeader}>
            <span
              className={classes.matchModalHeader__content}
              onClick={props.onCloseModal}
            >
              {leagueName}
            </span>
            <BsChevronRight />
            <span>{`Matchday ${props.gameweek}`}</span>
            <BsChevronRight />
            <span className={classes.matchModalHeader__content}>
              {props.homeTeamName} - {props.awayTeamName}
            </span>
          </header>
          <section className={classes.teamsSection}>
            <div className={classes.teamsSection__team}>
              <div className={classes.teamLogoContainer}>
                <img
                  src={props.homeTeamLogo}
                  className={classes.teamLogoImage}
                ></img>
              </div>
              <p className={classes.teamName}>{props.homeTeamName}</p>
            </div>
            <div className={classes.matchSummary}>
              <p className={classes.matchDate}>{formattedDate}</p>
              {props.matchStatus === "Finished" ? (
                <p className={classes.matchScore}>
                  <span>{props.homeTeamScore}</span> -{" "}
                  <span>{props.awayTeamScore}</span>
                </p>
              ) : (
                <p>{formattedTime}</p>
              )}
              <p className={classes.matchStatus}>{props.matchStatus}</p>
            </div>
            <div className={classes.teamsSection__team}>
              <div className={classes.teamLogoContainer}>
                <img
                  className={classes.teamLogoImage}
                  src={props.awayTeamLogo}
                ></img>
              </div>
              <p className={classes.teamName}>{props.awayTeamName}</p>
            </div>
          </section>
        </main>
        <MatchDetails />
      </div>
    </Fragment>
  );
};

export default MatchModal;
