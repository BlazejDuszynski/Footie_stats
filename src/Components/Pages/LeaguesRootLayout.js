import React, { Fragment } from "react";
import { Outlet } from "react-router";
import HomepageNavbar from "../Layout/HomepageNavbar";
import SectionsNavigation from "../Layout/SectionsNavigation";

const LeaguesRoot = () => {
  return (
    <Fragment>
      <SectionsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default LeaguesRoot;
