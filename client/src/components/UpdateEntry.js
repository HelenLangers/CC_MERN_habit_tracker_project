import React from 'react'

const UpdateEntry = () => {
  return (
    <>
    <h3>Update this thing!</h3>
    <form id="form-container">
      <input type="text" className="form-input" 
      placeholder='Recipe'></input>

      <input type="text" className="form-input" 
      placeholder='Date'></input>

      <input type="text" className="form-input"  
      placeholder='Notes'></input>
      
      <input type="submit"
      value="Submit"></input>

    </form>
    </>
  )
}

export default UpdateEntry