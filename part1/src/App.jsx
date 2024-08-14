const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are from {props.country}</p>
    </div>
  )
}

const App = () => {
  const name = 'Steven'
  const country = 'USA'
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Jeisson' country='Colombia' />
      <Hello name={name} country={country} />
    </div>
  )
}
export default App