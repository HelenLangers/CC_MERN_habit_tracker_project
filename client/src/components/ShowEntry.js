import React from 'react'
import './ShowEntry.css'
import Moment from 'moment'

const ShowEntry = ({selectedEntry, handleDelete}) => {

  if (!selectedEntry){
    return null
  }

  const deletedEntry = ()=> {
    handleDelete(selectedEntry._id)
  }

  const formattedDate = Moment(selectedEntry.date).format("MMMM Do YYYY")

  


  return (
    <div className='selectedEntry'>
      <p className='entryDate'>{formattedDate}</p>
      <h3>{selectedEntry.recipeName}</h3>
      <p>Notes: {selectedEntry.notes}</p>
      <div>
        <button className='editButtons' onClick={()=>deletedEntry(selectedEntry._id)}>Delete</button>
        <button className='editButtons'><a href={`/update/${selectedEntry._id}`}>Edit</a></button>
      </div>
    </div>
  )
}

export default ShowEntry