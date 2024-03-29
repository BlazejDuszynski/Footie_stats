import React from "react";
import { Outlet } from "react-router";
import SectionsNavigation from "../Layout/SectionsNavigation";
import classes from "./LeaguesRootLayout.module.css";

const LeaguesRoot = () => {
  return (
    <div className={classes.leaguesRoot}>
      <SectionsNavigation />
      <Outlet />
    </div>
  );
};

export default LeaguesRoot;
