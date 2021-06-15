import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
const App = () => {
  console.log("jio")
  const [searchText, setSearchText] = useState('')

  const SearchCountry=(event)=>{
    if(event.target.value.length > 0)
      setSearchText(event.target.value)

  }

  return <><p>Will return soon!!!!</p>
  <SearchForm header="Search Country" textValue={searchText} handleChange={SearchCountry} />
  <SearchResult searchText={searchText} />
  </>

}

export default App;
