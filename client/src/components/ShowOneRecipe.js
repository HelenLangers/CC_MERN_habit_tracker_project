import React from 'react'

const ShowOneRecipe = ({recipe}) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <img className="image" src={recipe.image} alt="" />
    </div>
  )
}

export default ShowOneRecipe