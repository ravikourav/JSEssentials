// Undestaing Objects in JavaScript

// object is key value pairs - name : "JavaScript"

// shorthand property names
const name = 'JavaScript'
const course = {
  _id: 0,
  // this is same as writing { name: name }
  name,
  duration: '3 months'
}
const course2 = {
  _id: 1,
  // this is same as writing { name: name }
  name: 'ReactJS',
  duration: '3 months'
}

// to access object properties we use dot notation
console.log(course.name) // JavaScript

// object destructuring
const { _id, name: courseName, duration } = course
console.log('Course Name is ' + courseName + ' Duration is ' + duration) // 3 months

// to destructure full object but is will overwrite same keys
const allCourse = { ...course, ...course2 }

console.log(allCourse)
