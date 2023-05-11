import React, { useEffect, useState } from "react";
import classes from "./MatchesItem.module.css";

const MatchesItem = (props) => {
  const [loading, setLoading] = useState(false);
  const [homeTeamShortName, setHomeTeamShortName] = useState();
  const [awayTeamShortName, setAwayTeamShortName] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  console.log(props.homeTeamId);

  const getTeamsShortNames = async () => {
    setLoading(true);
    const homeTeamResponse = await fetch(
      "https://v3.football.api-sports.io/teams?id=" + props.homeTeamId,
      options
    );
    const awayTeamResponse = await fetch(
      "https://v3.football.api-sports.io/teams?id=" + props.awayTeamId,
      options
    );
    const homeTeamData = await homeTeamResponse.json();
    const awayTeamData = await awayTeamResponse.json();
    console.log(homeTeamData, awayTeamData);
    setHomeTeamShortName(homeTeamData.response.team.code);
    setAwayTeamShortName(awayTeamData.response.team.code);
    setLoading(false);
  };

  useEffect(() => {
    getTeamsShortNames();
  }, [props]);

  return (
    <div className={classes.matchesItem}>
      <div title={props.homeTeamName} className={classes.teamInfo}>
        <p className={classes.homeTeamAbbr}>{props.homeTeamName}</p>
        <img className={classes.teamLogo} alt="" src={props.homeTeamLogo} />
      </div>
      {props.matchStatusName === "Finished" ? (
        <div className={classes.matchResult}>
          <p>{props.homeTeamScore}</p>
          <p>:</p>
          <p>{props.awayTeamScore}</p>
        </div>
      ) : (
        <p className={classes.matchResult}>VS</p>
      )}

      <div title={props.awayTeamName} className={classes.teamInfo}>
        <img className={classes.teamLogo} alt="" src={props.awayTeamLogo} />
        <p className={classes.awayTeamAbbr}>{props.awayTeamName}</p>
      </div>
    </div>
  );
};

export default MatchesItem;
