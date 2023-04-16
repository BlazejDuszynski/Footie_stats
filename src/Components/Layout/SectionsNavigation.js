import React from "react";
import { Link } from "react-router-dom";

const SectionsNavigation = () => {
  return (
    <div>
      <Link to="matches">Matches</Link>
      <Link to="table">Table</Link>
      <Link to="statistics">Statistics</Link>
    </div>
  );
};

export default SectionsNavigation;
