import { useState } from "react"

const App = () => {
  const [ counter, setCounter] = useState(0)

  const increaseOne = () => setCounter(counter + 1)
  const decreaseOne = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <Btn onClick={increaseOne} title='Increase one'/>
      <Btn onClick={resetCounter} title='Reset counter'/>
      <Btn onClick={decreaseOne} title='Decrease one'/>
    </>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Btn = ({ onClick, title }) => <button onClick={onClick}>{title}</button>

export default App