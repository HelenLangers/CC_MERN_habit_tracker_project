import React, {useState } from 'react';
import './RecipeCard.css';
import RecipeFront from './RecipeFront';
import RecipeBack from './RecipeBack';

const RecipeListItems = ({ recipe }) => {

  const [flip, setFlip] = useState(false)
  const [recipeToAddToForm, setRecipeToAddToForm] = useState({recipe})

  const handleClick = () => {
    setFlip(!flip)
    setRecipeToAddToForm({recipe})
  }

  return (
    
    <div className={`card ${flip ? 'flip' : ''}`} onClick={handleClick}>
      <div className="front">
        <RecipeFront recipe={recipe}/>
      </div>
      <div className="back">
        <RecipeBack recipe={recipe} recipeToAddToForm={recipeToAddToForm}/>
      </div>
    </div>
  
  )
}

export default RecipeListItems