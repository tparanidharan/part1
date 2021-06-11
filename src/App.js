import React, { useState } from 'react'

const Display= (addr) =>{
  console.log(addr)
   addr.map((addra) => <><p>{addra.name}</p></>)
}
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    console.log(newName);
    const addPersonObj = { name: newName}
    setPersons(persons.concat(addPersonObj))
      setNewName("");
      console.log(persons)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display addr={persons}/>
    </div>
  )
}
export default App;
