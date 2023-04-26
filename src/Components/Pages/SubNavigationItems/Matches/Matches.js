import React from "react";
import { useParams } from "react-router";
import classes from "./Matches.module.css";
import leaguesIDs from "../leaguesIDs";

const Matches = () => {
  return (
    <div className={classes.matchesSection}>
      {/* <div></div> */}
      <header>{}</header>
      <p>Calendar</p>
    </div>
  );
};

export default Matches;

export async function loader({ params }, leaguesIDs) {
  const seasonID = leaguesIDs.find(
    ({ paramsId }) => paramsId === params.leagueId
  )?.backendLeagueId;
  const response = await fetch(
    "https://api.soccersapi.com/v2.2/fixtures/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=schedule&d=2020-05-16&league_id=" +
      seasonID
  );
  console.log(response);
  return response;
}
