import react from 'react'

const SearchForm = ({header,handleChange , textValue })=>
   <><p>{header}</p><input value={textValue} onChange={handleChange}/></>

export default SearchForm
