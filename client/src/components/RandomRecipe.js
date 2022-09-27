import React, {useState} from "react";
import RecipeListItems from "./RecipeListItems";
// import ShowOneRecipe from "./ShowOneRecipe";

const RandomRecipe = ({recipe, getRandomRecipe}) => {

  const [hasRecipe, setHasRecipe] = useState(false);

  const handleClick = () => {
    getRandomRecipe()
    setHasRecipe(true)
  }


  return (
    <div>
      <h2>Stuck for ideas?</h2>
      <button onClick={handleClick}>Inspire Me!</button>
      { hasRecipe ? <RecipeListItems recipe={recipe}/> : <p>Put something here as a placeholder that gets replaced by a recipe when you hit the button</p>}
    
    </div>
  );
};

export default RandomRecipe;