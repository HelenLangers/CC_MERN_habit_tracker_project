import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateEntry = ({entries}) => {

  const {id} = useParams()

  if(!entries.length) return null

  const selectedEntryForEdit = entries.find(entry => entry._id === id)
  
  

  return (
    <>
    <h3>Update this thing!</h3>
    <form id="form-container">
      <input type="text" className="form-input" value={selectedEntryForEdit.recipeName}></input>

      <input type="text" className="form-input" value={selectedEntryForEdit.date}></input>

      <input type="text" className="form-input" value={selectedEntryForEdit.notes}></input>
      
      <input type="submit"
      value="Submit"></input>

    </form>
    </>
  )
}

export default UpdateEntry