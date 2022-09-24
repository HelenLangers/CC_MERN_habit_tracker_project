import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const Calendar = ({ onDateChanged, datesWithEntries }) => {
  const onChange = (value) => {
    onDateChanged(value);
  };

  const tileClassName = ({ date, view }) =>
    view === "month" &&
    datesWithEntries
      .map((dateWithEntry) => dateWithEntry.toDateString())
      .includes(date.toDateString())
      ? "dayWithEntryStyling"
      : null;

  return <ReactCalendar onChange={onChange} tileClassName={tileClassName} />;
};

export default Calendar;
