function TernaryOperations() {
  // Ternary Operations
  // Ternary operator to conditionally render

  const isLoggedIn = true

  const AuthCheck = () => {
    if (isLoggedIn) {
      return <h1>Welcome back, user!</h1>
    } else {
      return <h1>Please log in.</h1>
    }
  }
  // Using ternary operator we can rewrite above code as
  const message = isLoggedIn ? 'Welcome back, user!' : 'Please log in.'

  // by using ternary operator we have reduced multiple lines of code to single line
  // And code readability is also improved

  return (
    <div>
      <h1>TernaryOperations</h1>
      <h2>Using If-Else</h2>
      <p>{AuthCheck}</p>
      <h2>Using Ternary Operator</h2>
      <p>{message}</p>
      {/* ternary opration is an expression we can also use it insted curly braces*/}
      {isLoggedIn ? <h3>User is Logged In</h3> : <h3>User is Logged Out</h3>}

      {/* && And Operator */}
      {/* we can use is check if value before && is thurthy then it will return code after && */}
      {isLoggedIn && <h3>User is Logged In</h3>}

      {/* || OR Operator */}
      {/* we can use is check if value before && is falsy then it will return code after || */}
      {isLoggedIn || <h3>User is Not Logged In</h3>}
    </div>
  )
}

export default TernaryOperations
