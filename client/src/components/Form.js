import React, { useState } from 'react'
import './Form.css'

const Form = () => {

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
  }
  
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <input type="text"
      placeholder='recipe'
      value={recipe}
      onChange={handleRecipeChange}></input>

      <input type="text"
      placeholder='date'
      value={date}
      onChange={handleDateChange}></input>

      <input type="text" 
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