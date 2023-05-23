import React, { useEffect, useState } from "react";
import classes from "./MatchesItem.module.css";
import { Skeleton } from "@mui/material";

const MatchesItem = (props) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [homeTeamShortName, setHomeTeamShortName] = useState();
  const [awayTeamShortName, setAwayTeamShortName] = useState();

  const homeTeamID = props.homeTeamId.toString();
  const awayTeamID = props.awayTeamId;

  const options = {
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const getTeamsShortNames = async () => {
    setLoading(true);
    const homeTeamResponse = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/teams?id=" + homeTeamID,
      options
    );
    const awayTeamResponse = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/teams?id=" + awayTeamID,
      options
    );
    const homeTeamData = await homeTeamResponse.json();
    const awayTeamData = await awayTeamResponse.json();
    setHomeTeamShortName(homeTeamData.response[0].team.code);
    setAwayTeamShortName(awayTeamData.response[0].team.code);
    setLoading(false);
  };

  useEffect(() => {
    getTeamsShortNames();
  }, [props]);

  const openMatchesItemModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={classes.matchesItem} onClick={openMatchesItemModalHandler}>
      <div title={props.homeTeamName} className={classes.teamInfo}>
        {loading ? (
          <Skeleton animation="wave" width={50} height={35} variant="text" />
        ) : (
          <p className={classes.homeTeamAbbr}>{homeTeamShortName}</p>
        )}
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
        {loading ? (
          <Skeleton animation="wave" width={50} height={35} variant="text" />
        ) : (
          <p className={classes.awayTeamAbbr}>{awayTeamShortName}</p>
        )}
      </div>
    </div>
  );
};

export default MatchesItem;
