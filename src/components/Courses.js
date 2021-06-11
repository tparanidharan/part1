import React, {useState} from 'react'

const Courses=({course} )=>{

  console.log("course",course)
  return (
    <li>{course.name}</li>
  )
}


export default Courses;
