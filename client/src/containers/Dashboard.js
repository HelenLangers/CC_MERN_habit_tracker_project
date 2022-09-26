import React from 'react'

const Dashboard = ({entries, recipes}) => {
  if(!entries) return <h2>Loading...</h2>
  if(!recipes) return <h2>Loading...</h2>

  const entriesList = entries.map((entry)=>{
    return (
      <li key={entry._id}>
        <h2>{entry.recipeName}</h2>
        <p>{entry.date}</p>
        <p>{entry.notes}</p>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {entriesList}
      </ul>
    </div>
  )
}

export default Dashboard