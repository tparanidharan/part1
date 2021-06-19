import react, {useEffect} from 'react'
import axios from 'axios'

const WeatherInCap=({capitalName}) =>{
  console.log("in WeatherInCap")
  const URL = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&&query=${capitalName}`
  console.log("URL ", URL)
  useEffect(()=>{
    axios.get(URL)
      .then(response => {
        console.log(response.data)
      })
  },[])
  return <></>
}

export default WeatherInCap
