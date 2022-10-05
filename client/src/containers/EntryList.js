import React from 'react'
import CalendarWrapper from '../components/CalendarWrapper'

const EntryList = ({entries, onEntrySelect, handleDelete}) => {
  return (
    <>
    <CalendarWrapper entries={entries} onEntrySelect={onEntrySelect} handleDelete={handleDelete}/>
    </>
  )
}

export default EntryList