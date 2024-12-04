
const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, persons, setPersons, setNewName, setNewNumber }) => {
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
  return (
    <form onSubmit={ValidatePerson}>
      <div>Name: <input value={newName} onChange={handleNameChange} /></div>
      <div>Number: <input type='tel' value={newNumber} onChange={handleNumberChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm