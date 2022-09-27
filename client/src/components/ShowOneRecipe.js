import React, { useState } from 'react'
import './RecipeList.css';
import './RecipeCard.css'


const ShowOneRecipe = ({ recipe }) => {
  const [flip, setFlip] = useState(false)

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      <div className="front">
        <div className="front-container">
          <h2>{recipe.label}</h2>
          <img className="image" src={recipe.image} alt="" />
        </div>
      </div>

      <div className="back shadow">
        <div className="back-container">
          <div className="ingredients">
            <h3>Ingredients:</h3>
          </div>
          <div className="buttons-container">
            <div className="button-box">
              <a href={recipe.url} target="_blank">See Recipe</a>
            </div>
            <div className="add-button-div">
              <button className="submit-button" type="submit"><span><i className="fa-regular fa-calendar-plus fa-2xl calendar-add"></i></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowOneRecipe