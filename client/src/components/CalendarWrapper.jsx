import React, {useState} from "react";
import Calendar from "./Calendar";
import ShowEntry from "./ShowEntry";

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
    return<li><ShowEntry selectedEntry={selectedEntry} handleDelete={handleDelete}/></li>

  })


  return (
<>
    <Calendar
      onDateChanged={onDateChanged}
      datesWithEntries={datesWithEntries}
    />
    <ul>
      {entryCards}
    </ul>
    
    </>
  );
};

export default CalendarWrapper;
