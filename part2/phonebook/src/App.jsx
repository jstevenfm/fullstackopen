import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const ValidatePerson = (event) =>{
    event.preventDefault()
    const found = (person) => person.name === newName
    const foundPerson = persons.some(found)
    console.log(foundPerson);
    if (foundPerson) {
      return alert(`${newName} is already added to phonebook`)
    }
    addName()
  }
  
  const addName = () => {

    const nameObject = {name: newName}

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const Person = ({ person }) => <li>{person.name}</li>


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ValidatePerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App