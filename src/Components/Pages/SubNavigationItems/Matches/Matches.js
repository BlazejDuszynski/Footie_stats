import React from "react";
import classes from "./Matches.module.css";

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
    "https://api.soccersapi.com/v2.2/fixtures/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=schedule&d=2023-04-30&league_id=" +
      seasonID
  );
  const resData = await response.json();
  console.log(resData);
  return resData;
}
