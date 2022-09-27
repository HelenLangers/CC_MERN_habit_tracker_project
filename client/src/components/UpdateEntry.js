import React from 'react'
import { useParams} from 'react-router-dom'
import { useState } from 'react'

const UpdateEntry = ({entries, entryToUpdate}) => {

  const [recipeEdit, setRecipeEdit] = useState("");
  const [dateEdit, setDateEdit] = useState("entryToUpdate.date");
  const [notesEdit, setNotesEdit] = useState("entryToUpdate.notes");

  const {id} = useParams()

  if(!entries.length) return null

  const selectedEntryForEdit = entries.find(entry => entry._id === id)
  
  
  const handleRecipeEdit = (e) => {
    setRecipeEdit(e.target.value);
  }

  const handleDateEdit = (e) => {
    setDateEdit(e.target.value);
  }

  const handleNotesEdit = (e) => {
    setNotesEdit(e.target.value);
  }

  const handleFormEdit = (e) => {
    e.preventDefault();
    const recipeToSubmit = recipeEdit;
    const dateToSubmit = dateEdit;
    const notesToSubmit = notesEdit
    
    entryToUpdate({
      recipeName: recipeToSubmit,
      date: dateToSubmit,
      notes: notesToSubmit,
      _id: id
    });



    // console.log(recipeToSubmit, dateToSubmit, notes)
  }

  return (
    <>
    <h3>Update this thing!</h3>
    <form id="form-container" onSubmit={handleFormEdit}>
      <input type="text" className="form-input" defaultValue={selectedEntryForEdit.recipeName} placeholder={selectedEntryForEdit.recipeName} onChange={handleRecipeEdit}></input>

      <input type="text" className="form-input" defaultValue={selectedEntryForEdit.date} placeholder={selectedEntryForEdit.date} onChange={handleDateEdit}></input>

      <input type="text" className="form-input" defaultValue={selectedEntryForEdit.notes} placeholder={selectedEntryForEdit.notes} onChange={handleNotesEdit}></input>
      
      <input type="submit"
      value="Submit"></input>

    </form>
    </>
  )
}

export default UpdateEntry