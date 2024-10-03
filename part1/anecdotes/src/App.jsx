import { useState } from 'react'

const newAnecdote = () => {
  return Math.floor(Math.random() * 8)
}

// eslint-disable-next-line react/prop-types
const Btn = ({ onClick, title }) => <button onClick={onClick}>{title}</button>



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  const votes = new Uint8Array(anecdotes.length)
  const [point, setPoint] = useState(votes)
  const [topIndex, setTopIndex] = useState(0)
  const [topVote, setTopVote] = useState(0)

  const mostVoted = () => {
    for (let i = 0; i < point.length; i++){
      if (point[i] > topVote) {
        setTopIndex(i)
        setTopVote(point[i])
      }
    }
    
    if(topVote === 0) {
      return (
        <>
          <p>No votes yet!</p>
        </>
      )
    }
    return (
      <>
        <p>{anecdotes[topIndex]}</p>
        <p>Has {topVote} votes</p>
      </>
    )
  }

  const updateVotes = () => {
    const newVote = [...point]
    newVote[selected] += 1
    setPoint(newVote)
    mostVoted()
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {point[selected]} votes</p>
      <Btn onClick={() => (updateVotes())} title='Vote'/>
      <Btn onClick={() => setSelected(newAnecdote())} title='Next anecdote'/>
      <h2>Anecdote with most votes</h2>
      {/* <p>{anecdotes[topIndex]}</p>
      <p>Has {topVote} votes</p> */}
      {mostVoted()}
    </>
  )
}

export default App