import React from "react"
import styles from './EventList.module.css'
export default function EventList({events,handleClick}) {
    return (
      <div>
        {
        events.map((events, index) =>
        <div key={events.id} className={styles.card}>
            <h2>
              {index}-{events.title}
            </h2>
            <p>{events.location} - {events.date}</p>
            <button onClick={()=>handleClick(events.id)}>Delete</button>
          </div>)
       }
       </div>
    )
}
