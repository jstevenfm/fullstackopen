import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [showPerson, setShowPerson] = useState(true)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
    setShowPerson(false)
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

  const personToShow = showPerson ? persons : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter shown with: <input value={filterName} onChange={handleFilterNameChange} /></div>
      <div>Debug: {filterName}</div>
      <h3>Add a new person</h3>
      <form onSubmit={ValidatePerson}>
        <div>Name: <input value={newName} onChange={handleNameChange} /></div>
        <div>Number: <input type='tel' value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {personToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App