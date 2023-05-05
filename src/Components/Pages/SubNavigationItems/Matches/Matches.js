import React, { useState } from "react";
import { useLoaderData } from "react-router";
import classes from "./Matches.module.css";
import { BsCalendar4Event } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Matches = () => {
  const matches = useLoaderData();
  const [date, setDate] = useState(new Date());
  const month = date.getMonth() + 1;
  const day = date.getDate();
  console.log(day.length);
  console.log(day);

  return (
    <div className={classes.matchesSection}>
      <section className={classes.calendarSection}>
        <div className={classes.calendar}>
          <button className={classes.calendarButton + " " + classes.prevButton}>
            <IoIosArrowBack />
          </button>
          <div className={classes.calendarContent}>
            <BsCalendar4Event />
            <p>
              {day.toString.length === 1 ? "0" + day : day}/
              {month.toString.length === 1 ? "0" + month : month}
            </p>
          </div>
          <button className={classes.calendarButton + " " + classes.nextButton}>
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
