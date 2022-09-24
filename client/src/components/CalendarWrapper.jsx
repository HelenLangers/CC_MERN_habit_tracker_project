import React, {useState} from "react";
import Calendar from "./Calendar";

const CalendarWrapper = ({ entries }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChanged = (date) => {
    setSelectedDate(date)
    console.log("This is from calendar test", date);
  };

  const datesWithEntries = entries.map(({ date }) => new Date(date));

  return (
    <Calendar
      onDateChanged={onDateChanged}
      datesWithEntries={datesWithEntries}
    />
  );
};

export default CalendarWrapper;
