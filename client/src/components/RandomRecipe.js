import React, { useState } from "react";
import RecipeListItems from "./RecipeListItems";
import "./RandomRecipe.css";

const RandomRecipe = ({ recipe, getRandomRecipe }) => {
  const [hasRecipe, setHasRecipe] = useState(false);

  const handleClick = () => {
    getRandomRecipe();
    setHasRecipe(true);
  };

  return (
    <div className="container">
      <h2 className="random-header">Stuck for ideas?</h2>
      <button onClick={handleClick} className="button">
        Inspire Me!
      </button>
      {hasRecipe ? (
        <RecipeListItems recipe={recipe} />
      ) : (
        <img width={200} height="auto" src="./david.png" alt="random"></img>
      )}
    </div>
  );
};

export default RandomRecipe;
