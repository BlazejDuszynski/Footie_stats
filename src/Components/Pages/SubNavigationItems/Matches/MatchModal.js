import React, { Fragment } from "react";
import classes from "./MatchModal.module.css";
import { MdClose } from "react-icons/md";

const MatchModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
      <div className={classes.matchModal}>
        <div className={classes.topBar}>
          <button className={classes.closeButton} onClick={props.onCloseModal}>
            <MdClose />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default MatchModal;
