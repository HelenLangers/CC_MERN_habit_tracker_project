import React from 'react'
import './ShowEntry.css'

const ShowEntry = ({selectedEntry}) => {

  if (!selectedEntry){
    return null
  }

  return (
    <div className='selectedEntry'>
      <h3>{selectedEntry.recipeName}</h3>
      <p>{selectedEntry.date}</p>
      <p>Notes: {selectedEntry.notes}</p>
    </div>
  )
}

export default ShowEntry