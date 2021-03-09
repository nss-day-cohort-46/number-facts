import React, { useState, useEffect } from "react"

export const App = () => {
  const [number, setNumber] = useState("42")
  const [numberFact, setNumberFact] = useState("")

  // useEffect(() => {
  //   console.log("The useEffect that runs after every render")
  // })

  // Equivalent to componentDidMount()
  // useEffect(() => {
  //   console.log("The useEffect that runs once after initial render and never again")
  // }, [])

  // Equivalent to componentDidUpdate()
  // useEffect(() => {
  //   console.log("The useEffect that runs once after initial render and and then any time a value in the dependency array changes")
  // }, [valueOne, valueTwo, valueThree])

  useEffect(() => {
    // setNumberFact("Placeholder string")
    if (number !== "") {
      fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text())
        .then(response => setNumberFact(response))
    }
    //Return a function that will be run before the next execution of useEffect and when the component is unmounted.
    return () => console.log("Clean up")
  }, [number])

  return (
    <>
      {console.log("Render App!!!", "numberFact: ", numberFact)}
      <h1>Welcome to Number Facts!</h1>
      <div>
        <label htmlFor="number-input">Current Number</label>
        <input type="text" name="number-input" value={number} onChange={event => setNumber(event.target.value)} />
      </div>
      <div>
        <h3>Number Math</h3>
        <p>{numberFact}</p>
      </div>
    </>
  )
}
