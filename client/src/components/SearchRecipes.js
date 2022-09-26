import React, {useState} from 'react';
import RecipeList from './RecipeList';
import './SearchRecipes.css';

const SearchRecipes = ({recipes, setQuery }) => {

  const [search, setSearch] = useState('')

  if(!recipes) return <h2>Loading...</h2>

  const submitSearch = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const handleSearchBarChange = (event) => {
    setSearch(event.target.value)
  }


  return (
    <div className="search-page">
    <div className="wrapper">
      <form onSubmit={submitSearch} className="search-form">
        <input className="search-bar" 
        type="text" 
        value={search} 
        placeholder="Search..."
        onChange={handleSearchBarChange}/>
        <i className="fa-solid fa-magnifying-glass"></i>
        <button className="search-button" 
        type="submit">
        Search
        </button>
      </form>
    </div>

    <div className="search-results">
      {recipes.map((recipe, index) => (
        <RecipeList key={index}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
        />
      ))}
      </div>
    </div>
  )
}

export default SearchRecipes