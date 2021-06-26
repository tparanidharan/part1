import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import DisplayContact from './components/DisplayContact'
import SearchNamePart from './components/SearchNamePart'
import ServiceHandler from './services/ServiceHandler'
import NotifyUser from './components/NotifyUser'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhoneno, setnewPhoneno ] = useState('')
  const [ searchName, setSearchName] = useState('')
  const [notifyUser, setNotifyUser] = useState('')
  const [notifType, setNotifType] = useState('')
  const base_URL= 'http://localhost:3001/api/persons'
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

        ServiceHandler.addNewContact(base_URL,addPersonObj).then(newData => setPersons(persons.concat(newData))).catch(error =>
        {
          setNotifType('error')
          setNotifyUser(`${addPersonObj.name} could not be added successfully`)
          setTimeout(() => {
        setNotifType(null)
         setNotifyUser(null)}, 5000)
        })

         setNotifType('success')
         setNotifyUser(`${addPersonObj.name} added successfully`)
         setTimeout(() => {
       setNotifType(null)
        setNotifyUser(null)
    }, 5000)


  //      setPersons(persons.concat(addPersonObj))

        }
        else

          if((persons.filter((person)=>newPhoneno === person.number)).length === 0)
            if( window.confirm("confirm update",`${newName} is already there on the list, want to update with new phone no.`,[{text: 'Cancel'}])){
            const updatePerson = persons.filter((person)=> newName.toLowerCase() === person.name.toLowerCase())[0]
            ServiceHandler.updateContact(base_URL,{...updatePerson,number:newPhoneno})
            .then(newData => {setPersons(persons.map(person => person.id === newData.id ? newData : person )
            )
            setNotifType('success')
            setNotifyUser(`${updatePerson.name} updated successfully`)
            setTimeout(() => {
          setNotifType(null)
           setNotifyUser(null)
       }, 5000)}).catch(error =>
            {
              setNotifType('error')
              setNotifyUser(`${updatePerson.name} could not be updated successfully`)
              setTimeout(() => {
            setNotifType(null)
             setNotifyUser(null)}, 5000)
            })

          }
        setNewName("")
        setnewPhoneno("")
      }
      else if (newName.length === 0 && newPhoneno.length === 0)
      {
        setNotifType('error')
        setNotifyUser(`Please fill Name and Phone number`)

        setTimeout(() => {
        setNotifType(null)
        setNotifyUser(null)
   }, 5000)
      }
      else if (newName.length === 0 && newPhoneno.length > 0)
      {
        setNotifType('error')
        setNotifyUser(`Please fill Name`)

        setTimeout(() => {
        setNotifType(null)
        setNotifyUser(null)
   }, 5000)

      }
      else
      {
        setNotifType('error')
        setNotifyUser(`Please fill Phone number`)

        setTimeout(() => {
        setNotifType(null)
        setNotifyUser(null)
   }, 5000)

      }
    }

    const deleteHandler=(id)=>{
      ServiceHandler.deleteContact(base_URL,id).then(delData => {
          setPersons(persons.filter((person => person.id !== id)))
          setSearchName('')
          setNotifType('success')
          setNotifyUser(`${id} deleted successfully`)
          setTimeout(() => {
        setNotifType(null)
         setNotifyUser(null)
     }, 5000)
   }).catch(error => {
     setNotifType('error')
     setNotifyUser(`${id} could not be deleted`)
     console.log(error);
     setTimeout(() => {
   setNotifType(null)
    setNotifyUser(null)
}, 5000)
   })

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
     <NotifyUser message={notifyUser} notifType={notifType}/>
     <h3>Add a new Contact</h3>
     <PersonForm currPhone={newPhoneno} currName={newName} handlePersonChange={handlePersonChange} handlenumberChange={handlenumberChange} addPerson={addPerson} />
     <h3>Search in Contacts</h3>
     <SearchNamePart searchText={searchName} handleSearch={handleSearch} />
     <h3>Contact Numbers</h3>
     <DisplayContact addresses={persons} searchText={searchName} handleSearch={handleSearch} deleteHandler={deleteHandler} />
   </div>
 )

}

export default App;
