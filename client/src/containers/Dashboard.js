import React from 'react'
import Counter from '../components/Counter'
import Chart from '../components/Chart'
import RandomRecipe from '../components/RandomRecipe'
import Achievement from '../components/Achievement'
import "./Dashboard.css"

const Dashboard = ({entries, recipe, getRandomRecipe}) => {
  if(!entries) return <h2>Loading...</h2>
 



  return (
    <div className='dashboard'>
      <div className='dashboard-item'><Counter entries={entries}/></div>
      <div className='dashboard-item'><Chart entries={entries}/></div>
      <div className='dashboard-item'><Achievement entries={entries}/></div>
      <div className='dashboard-item'><RandomRecipe recipe={recipe} getRandomRecipe={getRandomRecipe}/></div>
     
    </div>
  )
}

export default Dashboard