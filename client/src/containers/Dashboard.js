import React from 'react'
import Counter from '../components/Counter'
import Chart from '../components/Chart'
import RandomRecipe from '../components/RandomRecipe'

const Dashboard = ({entries, recipe}) => {
  if(!entries) return <h2>Loading...</h2>
 



  return (
    <div className='dashboard-container'>
      <Counter entries={entries}/>
      <Chart entries={entries}/>
      <RandomRecipe recipe={recipe}/>
     
    </div>
  )
}

export default Dashboard