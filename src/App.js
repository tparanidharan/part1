import React, { useState } from 'react'

const MostVoted = ({copy,votescnt}) =>{
  console.log("in most voted",copy,votescnt,Math.max( ...votescnt));
const maxVotedAnnectode=copy[votescnt.indexOf(Math.max( ...votescnt))] || copy[0];
return <>{maxVotedAnnectode} has been voted {Math.max( ...votescnt)} times</>
}

const Button = ({handleClick, text}) =>  <div><button onClick={handleClick}>{text}</button></div>
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const [votes,setvotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0)
  const selAnecdote = () => {
  const value = Math.floor((Math.random() * anecdotes.length)  );
  setSelected(value);
}
const addVotes=() => {
  const copy = [...votes];
  copy[selected]+=1;
  console.log("copy:",copy);
  setvotes(copy);
}
  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick={selAnecdote} text="next Anecdote"/>
      <Button handleClick={addVotes} text="vote"/>
      <h2> Most voted Anecdote</h2>
      <MostVoted copy={anecdotes} votescnt={votes} />
    </div>
  )
}

export default App
