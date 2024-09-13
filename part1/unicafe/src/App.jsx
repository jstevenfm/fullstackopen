import { useState } from "react"

const Btn = ({ onClick, title }) => <button onClick={onClick}>{title}</button>

const Display = ({ title, counter }) => <p>{title}: {counter}</p>

const Statistics = ({ good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? (good * 100) / 9 : 0

  return (
    <>
      <Display title='Good' counter={good} />
      <Display title='Neutral' counter={neutral} />
      <Display title='Bad' counter={bad} />
      <Display title='All comments' counter={all} />
      <Display title='Average' counter={average} />
      <Display title='Positive' counter={positive} />
    </>
  )
}

const App = () => {
  const [ good, setGood] = useState(0)
  const [ neutral, setNeutral] = useState(0)
  const [ bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Btn onClick={() => setGood(good + 1)} title="Good" />
      <Btn onClick={() => setNeutral(neutral + 1)} title="Neutral" />
      <Btn onClick={() => setBad(bad + 1)} title="Bad" />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}




export default App