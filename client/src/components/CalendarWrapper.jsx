import React, {useState} from "react";
import Calendar from "./Calendar";
import ShowEntry from "./ShowEntry";
import "./CalendarWrapper.css"

//Calendar renders out an interactive calendar highlighting days with entries.

const CalendarWrapper = ({ entries, handleDelete }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());


  const onDateChanged = (date) => {
    setSelectedDate(date)
    console.log("This is from calendar test", date);
  };

  const datesWithEntries = entries.map(({ date }) => new Date(date));

  const entriesToDisplay = entries.filter(entry => (new Date(entry.date)).toDateString() === selectedDate.toDateString())

  const entryCards = entriesToDisplay.map((selectedEntry) => {
    return<li className="showEntryList"><ShowEntry selectedEntry={selectedEntry} handleDelete={handleDelete}/></li>

  })


  return (
<div className="new-entry-container">
    <div className="calendar"><Calendar
      onDateChanged={onDateChanged}
      datesWithEntries={datesWithEntries}
    />

    </div>
<div className="entry-cards">
    <ul className="padding-be-gone">
      {entryCards}
    </ul>
    </div>
    </div>

  );
};

export default CalendarWrapper;
