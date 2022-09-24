import React from 'react'

const Dashboard = ({entries, recipes}) => {
  if(!entries) return <h2>Loading...</h2>
  if(!recipes) return <h2>Loading...</h2>

  const entriesList = entries.map((entry)=>{
    return (
      <li key={entry._id}>
        <h2>{entry.recipeName}</h2>
        <p>{entry.date}</p>
        <p>{entry.notes}</p>
      </li>
    )
  })

  const recipesList = recipes.map((recipe)=>{
    return (
      <li key={recipe.recipe.uri}>
        <h2>{recipe.recipe.label}</h2>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {entriesList}
        {recipesList}
      </ul>
    </div>
  )
}

export default Dashboard