import React from 'react'
import './RecipeCard.css'

function RecipeFront({ recipe }) {
    return (
        <div className="card-container">
            <h2 className="title">{recipe.recipe.label}</h2>
            <img className="image" src={recipe.recipe.image}/>
            <p className="paragraph">See More</p>
        </div>
    )
}

export default RecipeFront