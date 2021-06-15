import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
const App = () => {
  console.log("jio")
  const [searchText, setSearchText] = useState('')

  const SearchCountry=(event)=>{
      setSearchText(event.target.value)

  }
  const selectCountry=(countrySelected)=>{
      console.log("countrySelected",countrySelected)
      setSearchText(countrySelected)
  }

  return <><p>Will return soon!!!!</p>
  <SearchForm header="Search Country" textValue={searchText} handleChange={SearchCountry} />
  <SearchResult searchText={searchText} handleSelectSearch={selectCountry} />
  </>

}

export default App;
