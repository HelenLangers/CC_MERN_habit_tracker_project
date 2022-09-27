import React from "react";
import ReactCalendar from "react-calendar";
import "./Chart.css";

const Chart = ({ entries }) => {
  const datesWithEntries = entries.map(({ date }) => new Date(date));

  const tileContent = ({ date, view }) =>
    view === "month" ? (
      <span>
        {datesWithEntries
          .map((dateWithEntry) => dateWithEntry.toDateString())
          .includes(date.toDateString())
          ? "🟢"
          : "⚪"}
      </span>
    ) : null;

  return (
    <div className="chart-container">
      <ReactCalendar tileContent={tileContent} tileClassName={"chart"} />
    </div>
  );
};

export default Chart;
