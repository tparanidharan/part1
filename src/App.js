import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
const App = () => {
  console.log("jio")
  const [searchText, setSearchText] = useState('')
  const[allCountries, setAllCountries] = useState([])
  useEffect(()=>{
    console.log("Inside UseEffect")
    const API_URL = `https://restcountries.eu/rest/v2/all`
    axios.get(API_URL)
    .then(response => {
      setAllCountries(response.data)
      console.log("All countries length after data assigned ",response.data.length)
    })
  } ,[])

  const SearchCountry=(event)=>{
      console.log("Search Text: ",searchText)
      setSearchText(event.target.value)

  }
  const selectCountry=(countrySelected)=>{
      console.log("countrySelected",countrySelected)
      setSearchText(countrySelected)
  }
console.log(allCountries.length);
  return <>
  <SearchForm header="Search Country" handleChange={SearchCountry} textValue={searchText} />
  <SearchResult searchText={searchText} handleSelectSearch={selectCountry} allCountries={allCountries}/>
  </>

}

export default App;
