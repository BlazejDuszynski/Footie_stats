import React, { useState } from "react";
import { useLoaderData } from "react-router";
import classes from "./Matches.module.css";
import { BsCalendar4Event } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Matches = () => {
  const matches = useLoaderData();
  const [date, setDate] = useState(new Date());
  const month = date.getMonth() + 1;
  const stringMonth = month.toString();

  const day = date.getDate();
  const stringDay = day.toString();

  const nextDayHandler = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };

  const prevDayHandler = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
  };

  return (
    <div className={classes.matchesSection}>
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
              {stringDay.length === 1 ? "0" + day : day}/
              {stringMonth.length === 1 ? "0" + month : month}
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
    </div>
  );
};

export default Matches;

export async function loader({ params }, leaguesIDs) {
  const seasonID = leaguesIDs.find(
    ({ paramsId }) => paramsId === params.leagueId
  )?.backendLeagueId;
  const response = await fetch(
    "https://api.soccersapi.com/v2.2/fixtures/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=schedule&d=2023-04-30&league_id=" +
      seasonID
  );
  const resData = await response.json();
  return resData;
}
