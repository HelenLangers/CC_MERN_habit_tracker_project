import React, { useState } from "react";
import RecipeListItems from "./RecipeListItems";

const RandomRecipe = (recipe) => {
  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Stuck for ideas?</h2>
        <RecipeListItems recipe={recipe} />
    </div>
  );
};

export default RandomRecipe;