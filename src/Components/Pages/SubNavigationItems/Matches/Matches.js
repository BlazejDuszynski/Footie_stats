import React, { useContext, useEffect, useState } from "react";
import classes from "./Matches.module.css";
import { BsCalendar4Event } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MatchesContainer from "./MatchesContainer";
import DateContext from "../../../Store/date-context";
import leaguesIDs from "../leaguesIDs";
import { useParams } from "react-router";
import LoadingState from "../../../Layout/LoadingState";

const Matches = () => {
  const dateCtx = useContext(DateContext);
  const { leagueId } = useParams();
  const [loading, setLoading] = useState(true);

  const nextDayHandler = () => {
    dateCtx.changeDate(1);
  };

  const prevDayHandler = () => {
    dateCtx.changeDate(-1);
  };

  // const year = dateCtx.date.getYear();

  const month = dateCtx.date.getMonth() + 1;
  let stringMonth = month.toString();
  if (stringMonth.length === 1) {
    stringMonth = "0" + stringMonth;
  }

  const day = dateCtx.date.getDate();
  let stringDay = day.toString();
  if (stringDay.length === 1) {
    stringDay = "0" + stringDay;
  }

  const fetchMatchesData = async ({ leagueId }, leaguesIDs) => {
    const seasonID = leaguesIDs.find(
      ({ paramsId }) => paramsId === leagueId
    )?.backendLeagueId;
    setLoading(true);
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/fixtures/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=schedule&d=2023-" +
        stringMonth +
        "-" +
        stringDay +
        "&league_id=" +
        seasonID
    );
    console.log(stringMonth, stringDay);
    const resData = await response.json();
    setLoading(false);
    console.log(resData);
    return resData;
  };

  useEffect(() => {
    fetchMatchesData({ leagueId }, leaguesIDs);
  }, [dateCtx.date, leagueId]);

  return (
    <main className={classes.matchesSection}>
      <section className={classes.calendarSection}>
        <div className={classes.calendar}>
          <button
            onClick={prevDayHandler}
            className={classes.calendarButton + " " + classes.prevButton}
          >
            <IoIosArrowBack />
          </button>
          <div className={classes.calendarContent}>
            <BsCalendar4Event />
            <p>
              {stringDay}/{stringMonth}
            </p>
          </div>
          <button
            onClick={nextDayHandler}
            className={classes.calendarButton + " " + classes.nextButton}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </section>
      {loading ? <LoadingState /> : <MatchesContainer />}
    </main>
  );
};

export default Matches;
