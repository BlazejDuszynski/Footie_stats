import React, { useEffect } from "react";

const Lineups = ({ matchId }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchLinupsData = async () => {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?id=" + matchId,
      options
    );
    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    fetchLinupsData();
  }, [matchId]);

  return <div>Lineups</div>;
};

export default Lineups;
