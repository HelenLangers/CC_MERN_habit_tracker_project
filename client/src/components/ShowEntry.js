import React from 'react'
import './ShowEntry.css'

const ShowEntry = ({selectedEntry, handleDelete, updateEntry}) => {

  if (!selectedEntry){
    return null
  }

  const deletedEntry = ()=> {
    handleDelete(selectedEntry._id)
  }

  const toUpdate = ()=>{
    updateEntry(selectedEntry._id)
  }

  return (
    <div className='selectedEntry'>
      <h3>{selectedEntry.recipeName}</h3>
      <p>{selectedEntry.date}</p>
      <p>Notes: {selectedEntry.notes}</p>
      <button onClick={deletedEntry}>Delete</button>
      <button onClick={toUpdate}>Edit</button>
    </div>
  )
}

export default ShowEntry