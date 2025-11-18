import { useEffect } from 'react'

function TemplateLiterals() {
  // Template Literals allow for embedded expressions and multi-line strings

  function greet(name) {
    return `Hello, ${name}! Welcome to Template Literals in JavaScript.`
  }

  // by using backticks ` ` we can create template literals
  // and embed expressions using ${expression}
  // this expression can be a variable, function call, or any valid JavaScript expression

  useEffect(() => {
    console.log(greet('Alice'))
  }, [])

  return <div>TemplateLiterals</div>
}

export default TemplateLiterals
