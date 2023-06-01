import React, { useEffect, useState, Fragment } from "react";
import classes from "./Lineups.module.css";
import LineupsItem from "./LineupsItem";

const Lineups = ({ matchId }) => {
  const [loading, isLoading] = useState(true);
  const [matchData, setMatchData] = useState(undefined);
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchLinupsData = async () => {
    isLoading(true);
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?id=" + matchId,
      options
    );
    const data = await response.json();
    setHomeTeam(data.response[0].lineups[0]);
    setAwayTeam(data.response[0].lineups[1]);
    setMatchData(data.response);
    isLoading(false);
  };

  useEffect(() => {
    fetchLinupsData();
  }, [matchId]);

  console.log(matchData);
  console.log(homeTeam);
  console.log(awayTeam);

  return (
    <div className={classes.lineupsContainer}>
      {loading ? (
        <div className={classes.spinner}></div>
      ) : (
        <Fragment>
          <header className={classes.lineupsHeader}>Starting XI</header>
          <section className={classes.lineupsSection}>
            <div className={classes.teamSection}>
              <ul>
                {homeTeam.startXI.map((item) => {
                  return (
                    <LineupsItem
                      playerNumber={item.player.number}
                      playerName={item.player.name}
                    />
                  );
                })}
              </ul>
            </div>
            <div className={classes.teamSection}>
              <ul>
                {awayTeam.startXI.map((item) => {
                  return (
                    <LineupsItem
                      playerNumber={item.player.number}
                      playerName={item.player.name}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
          <header className={classes.lineupsHeader}>Substitutions</header>
          <section className={classes.lineupsSection}>
            <div className={classes.teamSection}>
              <ul>
                {homeTeam.substitutes.map((item) => {
                  return (
                    <LineupsItem
                      playerNumber={item.player.number}
                      playerName={item.player.name}
                    />
                  );
                })}
              </ul>
            </div>
            <div className={classes.teamSection}>
              <ul>
                {awayTeam.substitutes.map((item) => {
                  return (
                    <LineupsItem
                      playerNumber={item.player.number}
                      playerName={item.player.name}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
          <header className={classes.lineupsHeader}>Coaches</header>
          <section className={classes.lineupsSection}>
            <div className={classes.teamSection}>
              <div>
                <p className={classes.coach}>{homeTeam.coach.name}</p>
              </div>
            </div>
            <div className={classes.teamSection}>
              <p className={classes.coach}>{awayTeam.coach.name}</p>
            </div>
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default Lineups;
