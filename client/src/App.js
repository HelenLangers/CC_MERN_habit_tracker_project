import Dashboard from './containers/Dashboard';
import { useState, useEffect } from 'react';
import { getEntries } from './TrackerService';

function App() {

  const [entries, setEntries] = useState ([])

  useEffect (()=>{
    getEntries()
    .then((data)=>{
      console.log('Here is the data:', data)
      setEntries(data)
    })
  }, [])

  return (
    <div>
    <Dashboard/>
    </div>
  );
}

export default App;
