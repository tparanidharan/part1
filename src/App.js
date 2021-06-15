import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  return <> <p> {notes[0]} </p></>
}

export default App
