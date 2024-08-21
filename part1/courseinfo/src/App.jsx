const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

const Total = (props) => {
  let numTotal = 0
  props.parts.forEach(part => {
    numTotal += part.exercises
  })
  return (
    <>
      <p>Number of exercises {numTotal}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      {/* <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} /> */}
      <Total parts={parts} />
    </>
  )
}

export default App