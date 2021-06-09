import React from 'react'

const App = () => {
  const course = {
   name: 'Half Stack application development',
   parts: [
     {
       name: 'Fundamentals of React',
       exercises: 10
     },
     {
       name: 'Using props to pass data',
       exercises: 7
     },
     {
       name: 'State of a component',
       exercises: 14
     }
   ]
 }

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total exercises={course.parts} />
    </div>
  );
}

const Header= (props) => {
  return (
    <>
      <h1> {props.course}  </h1>
    </>
  );
}

const Content =(parts) => {
 //console.log(parts.parts[0].name)
  return(
      <>
        <Part part_name={parts.parts[0].name} excercises={parts.parts[0].exercises} />
        <Part part_name={parts.parts[1].name} excercises={parts.parts[1].exercises} />
        <Part part_name={parts.parts[2].name} excercises={parts.parts[2].exercises} />
      </>
    );
}

const Total = (props) =>{
  return (<>
    <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
  </>);
}

const Part =(props) => {
  return (
    <>
    <p>
       {props.part_name} {props.excercises}
    </p>
    </>
  )
}
export default App;
