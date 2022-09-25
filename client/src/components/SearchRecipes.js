import React, {useState, useEffect, useRef} from 'react'
import RecipeList from './RecipeList'
import './SearchRecipes.css';

const SearchRecipes = ({recipes, setQuery }) => {

  const [search, setSearch] = useState('')
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  if(!recipes) return <h2>Loading...</h2>

  const submitSearch = (event) => {
    event.preventDefault()
    setQuery(search)
  }

  const handleSearchBarChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="search-page">
    {/* <div className="wrapper"> */}
      <form onSubmit={submitSearch} className="search-form"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}>
      {/* <i className="fa-solid fa-magnifying-glass search-icon"></i> */}
        <input className="search-bar" 
        type="text" 
        placeholder="What do you want to cook?"
        value={search} 
        onChange={handleSearchBarChange}
        ref={targetRef} showSearchInput={showSearchInput}></input>
        <button className="search-button" 
        type="submit">
        Search
        </button>
      </form>
    {/* </div> */}

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