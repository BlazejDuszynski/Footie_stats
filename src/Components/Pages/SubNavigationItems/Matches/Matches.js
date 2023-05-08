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
  const [responseData, setResponseData] = useState({});
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

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
    const leagueID = leaguesIDs.find(
      ({ paramsId }) => paramsId === leagueId
    )?.backendLeagueId;
    setLoading(true);
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2023-" +
        stringMonth +
        "-" +
        stringDay +
        "&league=" +
        leagueID +
        "&season=2022",
      options
    );
    console.log(stringMonth, stringDay);
    const resData = await response.json();
    console.log(resData);
    setLoading(false);
    setResponseData(resData.response);
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
      {loading ? <LoadingState /> : <MatchesContainer matches={responseData} />}
    </main>
  );
};

export default Matches;
