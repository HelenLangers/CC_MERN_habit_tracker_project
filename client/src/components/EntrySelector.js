import React from 'react'

const EntrySelector = ({entries, onEntrySelect}) => {

  const handleChange = event => {
    onEntrySelect(event.target.value)
  }

  return (
    <div><p>Select Entry:</p>
    <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>Select Date</option>{
            entries.map( entry => {
                return (
                    <option key={entry._id} value={entry._id}>{entry.date}</option>
                )
            })
        }
    </select>
    </div>
  )
}

export default EntrySelector