import react, {useEffect, useState} from 'react'
import axios from 'axios'
const SearchResult = ({searchText,handleSelectSearch}) =>
{
  const[searchRes, setSearchRes] = useState([])
  useEffect(()=>{
    console.log("Inside UseEffect")
    console.log("Search Data", searchText)
    const API_URL = `https://restcountries.eu/rest/v2/all`
    console.log(API_URL)
    axios.get(API_URL)
    .then(response => setSearchRes(response.data.filter((country)=> country.name.toLowerCase().includes(searchText.toLowerCase()))))
  } ,[searchText])
let newSearchText=""

const setNewSearchText = (data) => handleSelectSearch(data)
console.log("result lenght",searchRes.length)
console.log("result ",searchRes)
//if(searchRes.length>0) searchRes[0].languages.map((lang)=>console.log(lang.name))

 if(searchText.length>0){
    if(searchRes.length === 0 )
      return <><p> Sorry no match found</p></>
    if(searchRes.length === 1 )
      return <><h1>{searchRes[0].name}</h1>
        <p>Capitol: {searchRes[0].capital}</p>
        <p>Population: {searchRes[0].population}</p>
        <h2>languages</h2> <ul>
        {searchRes[0].languages.map((lang)=><li>{lang.name}</li>)}
        </ul>
        <img src={searchRes[0].flag} height="90px" width="115px"/>
        </>
    else if(searchRes.length>10)
      return <><p> Too many matches found, please provide more inputs</p></>
    else
      return <>{searchRes.map((country) =>  <p>{country.name} <button type="submit" onClick={()=>setNewSearchText(country.name)}>show</button></p>)} </>
}
  else
    return <></>

}

export default SearchResult
