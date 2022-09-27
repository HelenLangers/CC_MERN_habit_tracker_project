import React, { useState } from 'react'
import {useLocation} from "react-router-dom";
import './Form.css'

const Form = ({ onEntrySubmit, recipes }) => {

  const location = useLocation();
  const state = location.state;

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
      <input type="text" className="form-input" 
      placeholder='Recipe'
      value={recipe|| state.recipe.recipe.label}
      onChange={handleRecipeChange}></input>

      <input type="text" className="form-input" 
      placeholder='Date'
      value={date}
      onChange={handleDateChange}></input>

      <input type="text" className="form-input"  
      placeholder='Notes'
      value={notes}
      onChange={handleNotesChange}></input>
      
      <input type="submit"
      value="Submit"></input>

    </form>
    </>
    )
}
export default Form
 