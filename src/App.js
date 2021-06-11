import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import DisplayContact from './components/DisplayContact'
import SearchNamePart from './components/SearchNamePart'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhoneno, setnewPhoneno ] = useState('')
  const [ searchName, setSearchName] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      if(newName.length >0 && newPhoneno.length>0)
      {
        if((persons.filter((person)=>newName.toLowerCase() === person.name.toLowerCase())).length === 0){
        const addPersonObj = { name: newName,
                              number: newPhoneno}
        setPersons(persons.concat(addPersonObj))

        }
        else {
          alert(`${newName} is already there on the list`)
        }
        setNewName("")
        setnewPhoneno("")
      }
      else if (newName.length === 0 && newPhoneno.length === 0)
      {
        alert(`Please fill Name and Phone number`)
      }
      else if (newName.length === 0 && newPhoneno.length > 0)
      {
        alert(`Please fill Name `)
      }
      else
      {
        alert(`Please fill Phone number `)
      }
    }
    const handleSearch = (event) => {
      setSearchName(event.target.value);
    }
  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }
  const handlenumberChange = (event) => {
    if(event.target.validity.valid)
      setnewPhoneno(event.target.value);
  }
  return (
   <div>
     <h2>Phonebook</h2>
     <h3>Add a new Contact</h3>

     <PersonForm currPhone={newPhoneno} currName={newName} handlePersonChange={handlePersonChange} handlenumberChange={handlenumberChange} addPerson={addPerson} />
     <SearchNamePart searchText={searchName} handleSearch={handleSearch} />
     <h3>Contact Numbers</h3>
     <DisplayContact addresses={persons} searchText={searchName} handleSearch={handleSearch} />
   </div>
 )

}

export default App;
