import React from 'react';
import './RecipeList.css';

const RecipeList = ({ title, image }) => {
  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      <img className="image" src={image} alt="" />
    </div>
  )
}

export default RecipeList