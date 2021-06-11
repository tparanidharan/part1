import React, {useState} from 'react'

const Header = (message) => <><h1>{message.content}</h1></>
const Statistic = (props) => <><tr><td>{props.type}</td><td>{props.value}{props.type==="positive" ? "%" : ""}</td></tr></>
const Button = (props) => <><button onClick={props.handleClick}>{props.text}</button> </>
const Statistics = (props) =>{
  const allcnt= props.gcnt+props.ncnt+props.bcnt;
  if(allcnt > 0)
  return (<table><Statistic type="good" value={props.gcnt} />
  <Statistic type="neutral" value={props.ncnt} />
  <Statistic type="bad" value={props.bcnt} />
  <Statistic type="all" value={allcnt} />
  <Statistic type="average" value={ (props.gcnt-props.bcnt)/allcnt} />
  <Statistic type="positive" value={ 100*props.gcnt/allcnt} />
  </table>)
  return <>No Feedback given</>
}
const App = () =>{
  const content = "give feedback";
  const [goodcnt, setGood] = useState(0);
  const [neutralcnt, setNeutral] = useState(0);
  const [badcnt, setBad] = useState(0);
  const [allcnt,setAllCnt] = useState(0);
  const content1 = "statistics";

  const avg = () => allcnt===0 ? 0 : (goodcnt *1 + neutralcnt*0 - badcnt *1)/allcnt;
  const positivepct = () => (allcnt===0 ? 0 : 100 * goodcnt/allcnt) + "%";
  const incGood = () => {setGood(goodcnt + 1);
    setAllCnt(allcnt + 1);}
const incBad = () => {setBad(badcnt + 1);setAllCnt(allcnt + 1);}
const incNeutral = () => {setNeutral(neutralcnt + 1);
  setAllCnt(allcnt + 1);}


return ( <div>
  <Header content={content} />
  <Button handleClick={incGood} text={"good"} />
  <Button handleClick={incNeutral} text={"neutral"} />
  <Button handleClick={incBad} text={"bad"} />
  <Header content="statistics" />
    <Statistics gcnt={goodcnt} bcnt={badcnt} ncnt={neutralcnt} />
  </div>)
}
export default App;
