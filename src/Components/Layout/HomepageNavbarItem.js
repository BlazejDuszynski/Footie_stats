import React from "react";
import { NavLink } from "react-router-dom";
import LeagueContext from "../Store/league-context";
import { useContext } from "react";

const HomepageNavbarItem = (props) => {
  const { selectLeague } = useContext(LeagueContext);

  const selectLeagueHandler = () => {
    selectLeague(props.link);
  };

  return (
    <li>
      <NavLink onClick={selectLeagueHandler} to={props.to}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default HomepageNavbarItem;
