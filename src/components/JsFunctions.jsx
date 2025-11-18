function JsFunctions() {
  //Functions in JavaScript And React
  //Naming Convention for Functions - In Java Script We use camelCase, In React We Use PascalCase

  //There are 2 type of functions in JavaScript
  // Function Declaration
  function jsFunction() {
    return 'Hello, This is Named Function!'
  }
  jsFunction()

  // Arrow Function
  const arrowFunction = () => {
    return 'Hello, This is Arrow Function!'
  }
  arrowFunction()

  // why arrow function?
  // 1. Shorter Syntax
  // 2. Lexical this keyword

  const names = ['Alice', 'Bob', 'Charlie', 'David']

  return (
    <div>
      <h1>JsFunctions</h1>
      <h2>Rendering array using Both Funcitons</h2>
      {/* Using Function Declaration */}
      {names.map(function (name, index) {
        return <p key={index}>{name}</p>
      })}

      {/* Calling Functions */}
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
      {/*by using arrow funciton we removed keywords like function and return*/}
      {/*But arrow functions are not hoisted so they must be declared before using*/}
    </div>
  )
}

// Exporting Component

export default JsFunctions

// To export arrow Funciton we save it in variable and then export it
// export const JsFunctions = () => { ... }
