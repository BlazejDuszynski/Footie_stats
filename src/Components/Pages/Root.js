import React, { Fragment } from "react";
import { Outlet } from "react-router";
import HomepageNavbar from "../Layout/HomepageNavbar";

const RootLayout = () => {
  return (
    <Fragment>
      <HomepageNavbar />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
