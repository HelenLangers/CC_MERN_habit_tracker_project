import Dashboard from './containers/Dashboard';
import EntrySelector from './components/EntrySelector';
import ShowEntry from './components/ShowEntry';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import { getEntries, addEntry } from './TrackerService';

function App() {

  const [entries, setEntries] = useState ([])
  const [selectedEntryId, setSelectedEntryId] =  useState('')

  const [recipes, setRecipes] = useState([])

  useEffect (()=>{
    getEntries()
    .then((data)=>{
      console.log('Here is the data:', data)
      setEntries(data)
    })
  }, [])


  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=f56f77fd&app_key=f4f4f1660ed0c0457723b124104dcc76%20%09')
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
    <NavBar/>
    <EntrySelector entries={entries} onEntrySelect={onEntrySelect}/>
    <ShowEntry selectedEntry={selectedEntry}/>
    <Dashboard entries={entries} recipes={recipes}/>
    </div>
  );
}

export default App;
