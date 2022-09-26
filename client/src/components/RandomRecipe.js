import React, { useState } from "react";
import ShowOneRecipe from "./ShowOneRecipe";

const RandomRecipe = (recipe) => {
  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Stuck for ideas?</h2>

      <ShowOneRecipe recipe={recipe.recipe} />
    </div>
  );
};

export default RandomRecipe;
