import React, { useState } from "react";
import DateContext from "./date-context";

const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeDateHandler = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + offset);
    setSelectedDate(newDate);
  };

  const dateContext = {
    date: selectedDate,
    changeDate: changeDateHandler,
  };
  return (
    <DateContext.Provider value={dateContext}>{children}</DateContext.Provider>
  );
};

export default DateProvider;
