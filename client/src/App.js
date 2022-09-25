import Dashboard from './containers/Dashboard';
import EntryList from './containers/EntryList';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './config.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEntries, addEntry } from './TrackerService';
import CalendarWrapper from './components/CalendarWrapper';
import SearchRecipes from './components/SearchRecipes';

function App() {

  const [entries, setEntries] = useState ([])
  const [selectedEntryId, setSelectedEntryId] =  useState('')

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('chicken')

  useEffect (()=>{
    getEntries()
    .then((data)=>{
      setEntries(data)
    })
  }, [])


  useEffect(() => {
    getRecipes();
  }, [query])

  const appId= config.app_id
  const myKey= config.app_key

  const getRecipes = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + query + '&app_id=' + appId + '&app_key=' + myKey)
      .then(res => res.json())
      .then(recipes => setRecipes(recipes.hits))
  }

  // const addNewEntry = (entry)=>{
  //   addEntry(entry)
  //   .then(savedEntry => setEntries([...entries, savedEntry]))
  // }

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
        <Route path='/searchrecipes' element ={<SearchRecipes recipes={recipes}/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
