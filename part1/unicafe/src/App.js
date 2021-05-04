import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({text, statistic, symbol}) => {
  
  return(
    <div>{text}{statistic}{symbol}</div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Good = () => setGood(good + 1)
  const Neutral =  () => setNeutral(neutral + 1)
  const Bad = () => setBad(bad + 1)
  const total=good+neutral+bad
  const aver = (1*good+neutral*0+bad*(-1))/total
  const posit = (good/total)*1000*0.1  // const posit = (good/total*0.1)*1000
  let content
  if(good===0&&bad===0&&neutral===0){
    content =  
    <h2>No feedback given</h2>
  }
  else{
    content =
    <>
    <tbody>
    {/* <table> */}
    
    <tr><Statistics text='good ' statistic={good}/></tr>
    <tr><Statistics text='neutral ' statistic={neutral}/></tr>
    <tr><Statistics text='bad ' statistic={bad}/></tr>
    <tr><Statistics text='all ' statistic={total}/></tr>
    <tr><Statistics text='average ' statistic = {aver}/></tr>
    <tr><Statistics text='positive ' statistic = {posit} symbol = ' %'/></tr>
  
    {/* </table> */}
    </tbody>
    </>
  
  }
 
 
  return (
    <div>
      <h1>give feedback</h1>
            <Button handleClick={Good} text='Good' />
            <Button handleClick={Neutral} text='Neutral' />
            <Button handleClick={Bad} text='Bad' />
            <h1>statistics</h1>
        {content}
    </div>
  )
}

export default App
