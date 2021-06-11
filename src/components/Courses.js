import React from 'react'

const Courses=({course} )=>{

  console.log("course",course)
  return (
    <>
  <h2>{course.name}</h2>
    {course.parts.map((part)=><p>{part.name} {part.exercises}</p>)}
    <b> total of {course.parts.reduce((sumOfExcercise,part)=>sumOfExcercise + part.exercises,0)} excercises</b>
  </>
  )
}


export default Courses;
