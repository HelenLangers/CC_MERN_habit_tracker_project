import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({ onEntrySubmit }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state;

  const [recipe, setRecipe] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleRecipeChange = (e) => {
    setRecipe(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const recipeToSubmit = recipe;
    const dateToSubmit = date;
    const notesToSubmit = notes;

    onEntrySubmit({
      recipeName: recipeToSubmit ? recipeToSubmit : state.recipe.recipe.label,
      date: dateToSubmit,
      notes: notesToSubmit,
    });

    setRecipe("");
    setDate("");
    setNotes("");

    navigate("/entries");

    // console.log(recipeToSubmit, dateToSubmit, notes)
  };

  return (
    <>
      <h3>Mmm, delicious!</h3>
      <form onSubmit={handleFormSubmit} id="form-container">
        <input
          type="text"
          className="form-input"
          placeholder="Recipe"
          value={recipe || state.recipe.recipe.label}
          onChange={handleRecipeChange}
          contentEditable
        ></input>

        <input
          type="date"
          className="form-input"
          placeholder="Date"
          value={date}
          onChange={handleDateChange}
        ></input>

        <input
          id="notes"
          type="text"
          className="form-input"
          placeholder="Notes"
          value={notes}
          onChange={handleNotesChange}
        ></input>

        <input type="submit" value="Add entry"></input>
      </form>
    </>
  );
};
export default Form;
