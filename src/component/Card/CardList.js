import React from 'react'
import CardDetails from './CardDetails'
import { faker } from '@faker-js/faker';
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className = "card-list">
       <CardDetails image={faker.image.city()}/>
       <CardDetails image={faker.image.fashion()}/>
       <CardDetails image={faker.image.animals()}/>
       <CardDetails image={faker.image.fashion()}/>
    </div>
  )
}

export default CardList