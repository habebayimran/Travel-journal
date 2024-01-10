import React from 'react'
import './style.css'
export default function Card(props){
  return (
    <div className='card-div'>
        <img id='imgg' src={props.imageUrl}></img>
        <div id="card-divv">
            <h2 id='carddivh2'>{props.title}</h2>
            <h3 id='cardivh3'>{props.location}</h3>
            <p id='carddivstart'>Start Date: {props.startDate}</p>
            <p id='carddivend'>End Date: {props.endDate}</p>
            <p id='carddivdsp'>Description: {props.description}</p>
        </div>
    </div>
  )
}
