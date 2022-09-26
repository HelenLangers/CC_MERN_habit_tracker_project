import React from "react";
import ReactCalendar from "react-calendar";
import "./Chart.css";

const Chart = ({ entries }) => {
  const datesWithEntries = entries.map(({ date }) => new Date(date));

  const chartTileClassName = ({ date, view }) =>
    view === "month" &&
    datesWithEntries
      .map((dateWithEntry) => dateWithEntry.toDateString())
      .includes(date.toDateString())
      ? "chartDayWithEntryStyling"
      : null;

  return (
    <div className="chart-container">
    <h2>This will eventually be a little calendar graph thing</h2>
      <ReactCalendar tileClassName={chartTileClassName} />
    </div>
  );
};

export default Chart;
