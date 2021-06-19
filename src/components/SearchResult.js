import react, {useState, useEffect} from 'react'
import axios from 'axios'
import WeatherInCap from './WeatherInCap'

const SearchResult = ({searchText,handleSelectSearch,allCountries}) =>
{
let searchRes = []
 if(allCountries.length > 0 ){
  searchRes = allCountries.filter((country)=> country.name.toLowerCase() === searchText.toLowerCase())
  console.log("result lenght",searchRes.length)
  console.log("result ",searchRes)
  if(searchRes.length === 0 )
  {
    searchRes = allCountries.filter((country)=> country.name.toLowerCase().includes(searchText.toLowerCase()))
  }

}



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
        <img src={searchRes[0].flag} height="90px" width="115px" alt={`Flag of ${searchRes[0].name}`}/>
        <h2> Weather in {searchRes[0].capital}</h2>
        <WeatherInCap capitalName={searchRes[0].capital} />
        </>
    else if(searchRes.length>10)
      return <><p> Too many matches found, please provide more inputs</p></>
    else
      return <>{searchRes.map((country) =>  <p>{country.name} <button type="submit" onClick={()=>handleSelectSearch(country.name)}>show</button></p>)} </>
}
  else
    return <></>

}

export default SearchResult
