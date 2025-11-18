function ArrayMethods() {
  // map function
  const Cars = ['BMW', 'Audi', 'Mercedes', 'Toyota']

  // by using map we can iterate over array and return new array
  const carList = Cars.map((car, index) => <p key={index}>{car}</p>)

  // filter function
  // we can use filter to filter array based on condition
  const filteredList = Cars.filter((city) => city.length > 6)

  // reduce function
  // map and filter are variant of reduce function
  // reduce function return accumulator and current value accumulated value will we passed to next iteration
  const reduceLists = Cars.reduce((accumulator, car) => {
    if (!car.startsWith('A')) {
      return accumulator.concat(car)
    } else {
      return accumulator
    }
  })

  return (
    <div>
      <h1>ArrayMethods</h1>
      <h2>Using map function to render array</h2>
      {carList}

      <h2>Using filter function to filter array</h2>
      {filteredList.map((car, index) => (
        <p key={index}>{car}</p>
      ))}

      <h2>Using reduce function to sum array elements</h2>
      {reduceLists.map((car, index) => (
        <p key={index}>{car}</p>
      ))}
    </div>
  )
}

export default ArrayMethods
