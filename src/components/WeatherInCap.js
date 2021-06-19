import react, {useState,useEffect} from 'react'
import axios from 'axios'

const WeatherInCap=({capitalName}) =>{
  const [cityTemp,setCityTemp] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY
  console.log("in WeatherInCap API Key",API_KEY)
  const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&&query=${capitalName}`
  console.log("URL ", URL)
  useEffect(()=>{
    axios.get(URL)
      .then(response => {
        console.log(response.data)
        if(response.data.success){
          console.log(response.data.success);
          return <>Data Retrieval Error</>
        }
        else {
          console.log("set data in city temp")
          setCityTemp(response.data)
        }
      })
  },[])
  if(Object.keys(cityTemp).length !== 0){
    return <><p><b>temperature: </b> {cityTemp.current.temperature}</p>
    <img src={cityTemp.current.weather_icons[0]} alt={`Temperature in ${cityTemp.request.query}`} />
    <p><b> wind: </b>{cityTemp.current.wind_speed} mph direction {cityTemp.current.wind_dir}  </p>
    </>
  }
  else
  return <>Data Retrieving...</>
}

export default WeatherInCap
