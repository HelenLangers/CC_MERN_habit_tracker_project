import React, { useState } from 'react'
import './Form.css'

const Form = ({ onEntrySubmit }) => {

  const [recipe, setRecipe] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleRecipeChange = (e) => {
    setRecipe(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const recipeToSubmit = recipe;
    const dateToSubmit = date;
    const notesToSubmit = notes
    
    onEntrySubmit({
      recipeName: recipeToSubmit,
      date: dateToSubmit,
      notes: notesToSubmit
    });

    setRecipe("");
    setDate("");
    setNotes("");

    // console.log(recipeToSubmit, dateToSubmit, notes)
  }
  
  return (
    <>
    <form onSubmit={handleFormSubmit} id="form-container">
      <input className="form-input"  type="text"
      placeholder='recipe'
      value={recipe}
      onChange={handleRecipeChange}></input>

      <input className="form-input"  type="text"
      placeholder='date'
      value={date}
      onChange={handleDateChange}></input>

      <input className="form-input"  type="text" 
      placeholder='notes'
      value={notes}
      onChange={handleNotesChange}></input>

      <input type="submit"
      value="post"></input>

    </form>
    </>
    )
}
export default Form