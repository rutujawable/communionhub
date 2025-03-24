import React from 'react'
import "./Eventcard.css"


function Eventcard({event,index}) {
  return (
    <div className="event-card" key={index}>
          <img className="eventimg"  src={event.img}></img>
            <h2>{event.title}</h2>
            <p>
              <strong>Date📅:</strong> {event.date}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
            <p>
              <strong>Category:</strong> {event.category}
            </p>
          </div>
  )
}

export default Eventcard


