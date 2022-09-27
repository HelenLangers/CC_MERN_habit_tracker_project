import React from "react";
import RecipeListItems from "./RecipeListItems";
// import ShowOneRecipe from "./ShowOneRecipe";

const RandomRecipe = ({recipe}) => {
  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Stuck for ideas?</h2>
      {/* <RecipeListItems recipe={recipe} /> */}
        {/* <ShowOneRecipe recipe={recipe} /> */}
    </div>
  );
};

export default RandomRecipe;