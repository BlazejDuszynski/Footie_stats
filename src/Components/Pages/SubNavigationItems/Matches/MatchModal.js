import React, { Fragment } from "react";
import classes from "./MatchModal.module.css";
import { MdClose } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { useParams } from "react-router";
import leaguesIDs from "../leaguesIDs";

const MatchModal = (props) => {
  const { leagueId } = useParams();
  const leagueName = leaguesIDs.find(
    ({ paramsId }) => paramsId === leagueId
  )?.name;
  console.log(props.awayTeamName);
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
        </main>
      </div>
    </Fragment>
  );
};

export default MatchModal;
