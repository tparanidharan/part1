import React from 'react'

const PersonForm = ({currName,currPhone,handlePersonChange,handlenumberChange,addPerson}) =>{

return  <form onSubmit={addPerson}>
    <div>
      name: <input value={currName} onChange={handlePersonChange}/>
    </div>
    <div>
      Phone#: <input type="text" pattern="[\d -]+" value={currPhone} onChange={handlenumberChange}/>
    </div>
    <div>
      <button type="submit">add Person</button>
    </div>
  </form>

}

export default PersonForm;
