import React, { useState } from 'react'
import "./counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const buttonClickHandler = () => {
        setCounter(prevCounter => prevCounter + 1)
       console.log(counter);
    }
   

  return (
    <div>
        <p>counter: {counter}</p>
        <button className = "counter_button" onClick={buttonClickHandler}>Increament</button>

        <button className = "counter_button" onClick={() => setCounter(p => p > 0 ? p - 1: p)}>decreament</button>

        <input placeholder='Enter a number' type="number" min="0"/>
        <button className= "increamentBy-button">IncreamentBy</button>
        
    </div>
  )
}

export default Counter