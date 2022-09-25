import React, { useState } from 'react'
import ShowOneRecipe from './ShowOneRecipe'

const RandomRecipe = (recipe, setDietQuery) => {

    const [diet, setDiet] = useState('')
    
    if(!recipe) return <h2>Loading...</h2>

    const submitRandomSearch = () => {
        setDietQuery(diet)
    }

    const handleRandomSubmit = (event) => {
        setDiet(event.target.value)
    }

    return (
        <div>
            <h2>Stuck for ideas?</h2>
            <p>I am a...</p>
            <div>
            <form onSubmit={submitRandomSearch}>
                <input type="radio" id="meat" name="diet" value="meat" onChange={handleRandomSubmit}/>
                <label for="meat">Meat Eater</label>
                <input type="radio" id="vegetables" name="diet" value="vegetables" onChange={handleRandomSubmit}/>
                <label for="vegetables">Vegetarian</label>
            <button type="submit">Suggest a dish</button>
            </form>
            </div>

            <div>
                <ShowOneRecipe recipe={recipe.recipe}/>
            </div>
        </div>
    )
}

export default RandomRecipe