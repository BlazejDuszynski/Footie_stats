import React from "react";

const DateContext = React.createContext({
  date: "",
  changeDate: () => {},
});

export default DateContext;