import Dashboard from './containers/Dashboard';
import EntryList from './containers/EntryList';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './config.js';
import Form from './components/Form';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries, postEntry } from './TrackerService';
import CalendarWrapper from './components/CalendarWrapper';
import SearchRecipes from './components/SearchRecipes';
import RandomRecipe from './components/RandomRecipe';

function App() {

  const [entries, setEntries] = useState ([])
  const [selectedEntryId, setSelectedEntryId] =  useState('')

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('salad')
  const [dietQuery, setDietQuery] = useState('')
  const [randomRecipe, setRandomrecipe] = useState([])

  useEffect (()=>{
    getEntries()
    .then((data)=>{
      setEntries(data)
    })
  }, [])

  useEffect(() => {
    getRecipes();
  }, [query])

  useEffect(() => {
    getRandomRecipe();
  }, [dietQuery])


  const appId= config.app_id
  const myKey= config.app_key

  const getRecipes = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + query + '&app_id=' + appId + '&app_key=' + myKey + '&diet=balanced')
      .then(res => res.json())
      .then(recipes => setRecipes(recipes.hits))
  }

  const getRandomRecipe = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + dietQuery + '&app_id=' + appId + '&app_key=' + myKey + '&diet=balanced&random=true')
      .then(res => res.json())
      .then(recipe => setRandomrecipe(recipe.hits[0].recipe))
  }

  // const addNewEntry = (entry)=>{
  //   addEntry(entry)
  //   .then(savedEntry => setEntries([...entries, savedEntry]))
  // }

  const addNewEntry = (entry)=>{
    postEntry(entry)
    .then(savedEntry => setEntries([...entries, savedEntry]))
  }

  const onEntrySelect = id => {
    setSelectedEntryId(id)
  }
  
  const selectedEntry = entries.find(entry => entry._id === selectedEntryId)

  return (
    <div>

    <Router>
    <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard entries={entries} recipes={recipes}/>}/>
        <Route path='/entries' element = {<EntryList entries={entries} onEntrySelect={onEntrySelect} selectedEntry = {selectedEntry}/>}/>
        <Route path='/calendar' element = {<CalendarWrapper entries={entries}/>}/>
        <Route path='/searchrecipes' element ={<SearchRecipes recipes={recipes} setQuery={setQuery}/>}/>
        <Route path='/randomiser' element={<RandomRecipe recipe={randomRecipe} setDietQuery={setDietQuery}/>}/>
        <Route path='/form' element={<Form onEntrySubmit={(entry) => addNewEntry(entry)}/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
