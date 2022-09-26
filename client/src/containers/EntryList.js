import React from 'react'
import ShowEntry from '../components/ShowEntry'
import EntrySelector from '../components/EntrySelector'
import CalendarWrapper from '../components/CalendarWrapper'

//in here i am trying to use the state of selected date to 
//render entreis from the state of all entries 
//which have a date who when made into an object 
//and then back into a date string
//match the date string of the selected date
//to do that i need the state of selected date
//and the state of all entries



const EntryList = ({entries, onEntrySelect, selectedEntry, handleDelete}) => {
  return (
    <>
    <CalendarWrapper entries={entries} onEntrySelect={onEntrySelect}/>
    <EntrySelector entries={entries} onEntrySelect={onEntrySelect}/>
    <ShowEntry selectedEntry={selectedEntry} handleDelete={handleDelete}/>
    </>
  )
}

export default EntryList