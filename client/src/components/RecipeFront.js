import React from 'react'
import './RecipeCard.css'

function RecipeFront({ recipe }) {
    return (
        <div className="front-container">
            <h2 className="title">{recipe.recipe.label}</h2>
            <img className="image" src={recipe.recipe.image}/>
            <p className="paragraph">Tap to see more</p>
        </div>
    )
}

export default RecipeFront