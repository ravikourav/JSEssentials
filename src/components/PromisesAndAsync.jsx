import { use, useEffect, useState } from 'react'

function PromisesAndAsync() {
  // Promises
  // promises is used when we are not sure about the time of completion
  // to create a new promise we use the Promise constructor

  const myPromise = new Promise((resolve, reject) => {
    const success = true
    if (success) {
      resolve('Promise Resolved Successfully')
    } else {
      reject('Promise Rejected')
    }
  })

  // then we can use .then() method to handle the resolved value and .catch() method to handle the rejected value
  myPromise
    .then((message) => console.log(message))
    .catch((error) => console.error(error))

  const [data, setData] = useState(null)

  // Fetching data using Promises
  const featchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error:', error))
  }

  // Async/Await
  // to use async/await we need to define a function with async keyword
  // then we can use await keyword to wait for the promise to resolve

  const featchDataAsync = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  useEffect(() => {
    featchData()
    //featchDataAsync()
  }, [])

  return (
    <div>
      <h1>PromisesAndAsync</h1>
    </div>
  )
}

export default PromisesAndAsync
