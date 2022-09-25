import React, {useState} from 'react'
import RecipeList from './RecipeList'
import './SearchRecipes.css';

const SearchRecipes = ({recipes, setQuery }) => {

  const [search, setSearch] = useState('')
  if(!recipes) return <h2>Loading...</h2>

  const submitSearch = (event) => {
    event.preventDefault()
    setQuery(search)
  }

  const handleSearchBarChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
    <div>
      <form onSubmit={submitSearch} className="search-form">
        <input className="search-bar" 
        type="text" 
        placeholder="What do you want to eat?"
        value={search} 
        onChange={handleSearchBarChange}></input>
        <button className="search-button" 
        type="submit">
        Search
        </button>
      </form>
    </div>

    <div className="search-results">
      {recipes.map((recipe) => (
        <RecipeList key={recipe.recipe.label}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
        />
      ))}
      </div>
    </div>
  )
}

export default SearchRecipes