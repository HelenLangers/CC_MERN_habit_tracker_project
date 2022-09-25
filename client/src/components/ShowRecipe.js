import React from 'react';
import './ShowRecipe.css';

const ShowRecipe = ({ title, image, ingredients, url }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => {
          <li>{ingredient.text}</li>
        })}
      </ol>
      <img ClassName="image" src={image} alt=""></img>
      <p>See the full recipe: {url}</p>
    </div>
  )
}

export default ShowRecipe