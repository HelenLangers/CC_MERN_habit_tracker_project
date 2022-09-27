import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './RecipeList.css';
import './RecipeCard.css'


const ShowOneRecipe = ({ recipe }) => {
  console.log(recipe)

  const [flip, setFlip] = useState(false)
  const [recipeToAddToForm, setRecipeToAddToForm] = useState({recipe})

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      <div className="front">
        <div className="front-container">
          <h2>{recipe.recipe.label}</h2>
          <img className="image" src={recipe.recipe.image} alt="" />
        </div>
      </div>

      <div className="back">
        <div className="back-container">
          <div className="ingredients">
            <h3>Ingredients:</h3>
          </div>
          <div className="buttons-container">
            <div className="button-box">
              <a href={recipe.recipe.url} target="_blank">See Recipe</a>
            </div>
            <div className="add-button-div">
            <Link to="/form" state={recipeToAddToForm}>
            <span><i className="fa-regular fa-calendar-plus fa-2xl calendar-add"></i></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowOneRecipe