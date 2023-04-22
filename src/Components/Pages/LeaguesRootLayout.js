import React, { Fragment } from "react";
import { Outlet } from "react-router";
import SectionsNavigation from "../Layout/SectionsNavigation";
import classes from "./LeaguesRootLayout.module.css"

const LeaguesRoot = () => {
  return (
    <Fragment>
      <div className={classes.leaguesRoot}>
        <SectionsNavigation />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default LeaguesRoot;
