import React, { Fragment } from "react";
import classes from "./MatchModal.module.css";

const MatchModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
    </Fragment>
  );
};

export default MatchModal;
