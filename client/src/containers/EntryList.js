import React from 'react'
import ShowEntry from '../components/ShowEntry'
import EntrySelector from '../components/EntrySelector'
import CalendarWrapper from '../components/CalendarWrapper'


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