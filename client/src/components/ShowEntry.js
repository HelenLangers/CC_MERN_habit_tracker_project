import React from 'react'
import { useParams } from 'react-router-dom'
import './ShowEntry.css'

const ShowEntry = ({selectedEntry, handleDelete}) => {

  if (!selectedEntry){
    return null
  }

  const deletedEntry = ()=> {
    handleDelete(selectedEntry._id)
  }

  


  return (
    <div className='selectedEntry'>
      <h3>{selectedEntry.recipeName}</h3>
      <p>{selectedEntry.date}</p>
      <p>Notes: {selectedEntry.notes}</p>
      <button onClick={()=>deletedEntry(selectedEntry._id)}>Delete</button>
      <button><a href={`/update/${selectedEntry._id}`}>Edit</a></button>
    </div>
  )
}

export default ShowEntry