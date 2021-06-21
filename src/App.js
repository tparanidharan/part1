import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import DisplayContact from './components/DisplayContact'
import SearchNamePart from './components/SearchNamePart'
import ServiceHandler from './services/ServiceHandler'
const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhoneno, setnewPhoneno ] = useState('')
  const [ searchName, setSearchName] = useState('')
  const base_URL= 'http://localhost:3001/persons'
  useEffect(() => {
     console.log('effect')
    // console.log("inside effect",ServiceHandler.fetchInitialData(base_URL))
    ServiceHandler.fetchInitialData(base_URL).then(contacts => setPersons(contacts))
       }
   , [])

  const addPerson = (event) => {
      event.preventDefault()
      if(newName.length >0 && newPhoneno.length>0)
      {
        if((persons.filter((person)=>{
          return newName.toLowerCase() === person.name.toLowerCase()}
        )).length === 0){
        const addPersonObj = { name: newName,
                              number: newPhoneno}

        ServiceHandler.addNewContact(base_URL,addPersonObj).then(newData => setPersons(persons.concat(newData)))
  //      setPersons(persons.concat(addPersonObj))

        }
        else

          if((persons.filter((person)=>newPhoneno === person.number)).length === 0)
            if( window.confirm("confirm update",`${newName} is already there on the list, want to update with new phone no.`,[{text: 'Cancel'}])){
            const updatePerson = persons.filter((person)=> newName.toLowerCase() === person.name.toLowerCase())[0]
            ServiceHandler.updateContact(base_URL,{...updatePerson,number:newPhoneno})
            .then(newData => setPersons(persons.map(person => person.id === newData.id ? newData : person )))
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
        alert(`Please fill Name`)
      }
      else
      {
        alert(`Please fill Phone number`)
      }
    }

    const deleteHandler=(id)=>{
      console.log(ServiceHandler.deleteContact(base_URL,id))
      setPersons(persons.filter((person => person.id !== id)))
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
     <DisplayContact addresses={persons} searchText={searchName} handleSearch={handleSearch} deleteHandler={deleteHandler} />
   </div>
 )

}

export default App;
