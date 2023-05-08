import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./Table.module.css";
import leaguesIDs from "../leaguesIDs";

const Table = () => {
  const [loading, setLoading] = useState();
  const { leagueId } = useParams(false);
  console.log(leagueId);
  console.log(leaguesIDs);
  let leagueName = leaguesIDs.find(
    (leagueID) => leagueID.paramsId === leagueId
  );

  let seasonID = leagueName.backendLeagueId;
  console.log(seasonID);

  const fetchTableData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/leagues/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=standings&season_id=" +
        seasonID
    );
    const resData = await response.json();
    console.log(resData);
    setLoading(false);
    return resData;
  };

  useEffect(() => {
    fetchTableData();
  }, [leagueId]);

  return (
    <div className={classes.tableSection}>
      <h2 className={classes.tableSectionHeader}>
        {leagueName.name} season 2022/23
      </h2>
      {loading ? <p>Loading...</p> : <p>Table</p>}
    </div>
  );
};

export default Table;
