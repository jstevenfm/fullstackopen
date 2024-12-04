const Filter = ({ filterName,  handleFilterNameChange }) => (<div>Filter by name: <input value={filterName} onChange={handleFilterNameChange} /></div>)

export default Filter