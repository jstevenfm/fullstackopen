

const Total = ({ parts }) => {
  let numTotal = parts.reduce((acumulator, part) => acumulator + part.exercises, 0)
  return <p><strong>Total of {numTotal} exercises</strong></p>
}

export default Total