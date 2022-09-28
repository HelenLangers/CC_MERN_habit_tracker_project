import Dashboard from './containers/Dashboard';
import EntryList from './containers/EntryList';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './config.js';
import Form from './components/Form';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { deleteEntry, getEntries, postEntry, updateEntry } from './TrackerService';
import CalendarWrapper from './components/CalendarWrapper';
import SearchRecipes from './components/SearchRecipes';
import RandomRecipe from './components/RandomRecipe';
import UpdateEntry from './components/UpdateEntry';

function App() {

  const [entries, setEntries] = useState ([])
  const [selectedEntryId, setSelectedEntryId] =  useState('')

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('salad')
  const [randomRecipe, setRandomRecipe] = useState([])

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
  }, [query])

  const appId= config.app_id
  const myKey= config.app_key

  const getRecipes = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + query + '&app_id=' + appId + '&app_key=' + myKey + '&diet=balanced')
      .then(res => res.json())
      .then(recipes => setRecipes(recipes.hits.splice(0, 12)))
  }

  const getRandomRecipe = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + query + '&app_id=' + appId + '&app_key=' + myKey + '&diet=balanced&random=true')
      .then(res => res.json())
      .then(recipes => setRandomRecipe(recipes.hits[0]))
  }

  const addNewEntry = (entry)=>{
    postEntry(entry)
    .then(savedEntry => setEntries([...entries, savedEntry]))
  }

  const onEntrySelect = id => {
    setSelectedEntryId(id)
  }
  
  const selectedEntry = entries.find(entry => entry._id === selectedEntryId)

  const handleDelete = (id) =>{
    deleteEntry(id)
    setEntries(entries.filter(entry => entry._id !== id))
  }

  /* const handleDelete = (id) =>{
    deleteEntry(id).then(()=>{
      let temp = entries.map(e=>e)
      const toDelete = entries.map(e=>e._id).indexOf(id)
      temp.splice(toDelete, 1);
      setEntries(temp)
    })
  } */

  const entryToUpdate = (update) => {
    const updatedEntryIndex = entries.findIndex(entry => entry._id === update._id)
    console.log(updatedEntryIndex)
    const updatedEntries = [...entries];
    updatedEntries[updatedEntryIndex] = update
    setEntries(updatedEntries)
    updateEntry(update);
  }


  return (
    <div>

    <Router>
    <Header/>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Dashboard entries={entries} recipe={randomRecipe} getRandomRecipe={getRandomRecipe}/>}/>
        <Route path='/calendar' element = {<CalendarWrapper entries={entries} handleDelete={handleDelete}/>}/>
        <Route path='/searchrecipes' element ={<SearchRecipes recipes={recipes} setQuery={setQuery}/>}/>
        <Route path='/entries' element = {<EntryList entries={entries} onEntrySelect={onEntrySelect} selectedEntry = {selectedEntry} handleDelete={handleDelete} entryToUpdate={entryToUpdate}/> }/>
        <Route path='/form' element={<Form onEntrySubmit={(entry) => addNewEntry(entry)} entries={entries} />}/>
        <Route path='/searchrecipes' element ={<SearchRecipes recipes={recipes} setQuery={setQuery} />}/>
        <Route path='/update/:id' element={<UpdateEntry selectedEntry={selectedEntry} entries={entries} entryToUpdate={entryToUpdate}/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
