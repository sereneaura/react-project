import React, { useState } from 'react'
import Button from '../Button/Button';
import  faker  from '@faker-js/faker';
import"./NewCard.css";

const NewCard = () => {
  const [title, setTitle] = useState("")
  const [input, setInput] = useState({
    title: "",
    description: "",
  })

  const [card,setCard] = useState({
    id: "faker.datatype.uuid()",
    title: "",
    description: "",
    image: "faker.image."
  })

  const inputChangeHandler = (event) => {
    setInput(prevState => {
      return {...prevState, [event.target.name]: event.target.value}
    })
  }

    console.log(input);
  return (
    <form className='new-card'>
      <div>
        <label htmlFor = "title">Card title</label>
        <input type="text" 
        id ="title" 
        name = "title" 
        value={input.title} 
        onChange={inputChangeHandler}/> 
      </div>

      <div>
      <label htmlFor = "description">Card description</label>
        <input type="text" 
        id ="description" 
        value={input.description} 
        onChange={inputChangeHandler}></input> 
      </div>

      <Button displayName= "Add Card"/>

    </form>
  )
}

export default NewCard