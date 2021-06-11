import React from 'react'

const SearchNamePart = ({searchText,handleSearch}) =>
  <div>
    Search Name <input value={searchText} onChange={handleSearch}/>
  </div>

export default SearchNamePart
