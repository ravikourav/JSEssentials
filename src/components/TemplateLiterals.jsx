function TemplateLiterals() {
  // Template Literals allow for embedded expressions and multi-line strings

  function greet(name) {
    return `Hello, ${name}! Welcome to Template Literals in JavaScript.`
  }

  // by using backticks ` ` we can create template literals
  // and embed expressions using ${expression}
  // this expression can be a variable, function call, or any valid JavaScript expression

  return (
    <div>
      <h1>Template Literals</h1>
      <p>{greet('Alice')}</p>
    </div>
  )
}

export default TemplateLiterals
