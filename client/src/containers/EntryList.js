import React from 'react'
import ShowEntry from '../components/ShowEntry'
import EntrySelector from '../components/EntrySelector'


const EntryList = ({entries, onEntrySelect, selectedEntry}) => {
  return (
    <>
    <EntrySelector entries={entries} onEntrySelect={onEntrySelect}/>
    <ShowEntry selectedEntry={selectedEntry}/>
    </>
  )
}

export default EntryList