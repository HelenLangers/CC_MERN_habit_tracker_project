import React from 'react'

const ShowEntry = ({selectedEntry}) => {

  if (!selectedEntry){
    return null
  }

  return (
    <div>
      <h3>{selectedEntry.recipeName}</h3>
      <p>{selectedEntry.date}</p>
      <p>{selectedEntry.notes}</p>
    </div>
  )
}

export default ShowEntry