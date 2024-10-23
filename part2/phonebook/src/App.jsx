import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-123456',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const ValidatePerson = (event) =>{
    event.preventDefault()
    const found = (person) => person.name === newName
    const foundPerson = persons.some(found)
    if (foundPerson) {
      return alert(`${newName} is already added to phonebook`)
    }
    addName()
  }
  
  const addName = () => {

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const Person = ({ person }) => <li>{person.name} {person.number}</li>


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ValidatePerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input type='tel' value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App