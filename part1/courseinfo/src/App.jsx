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
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App