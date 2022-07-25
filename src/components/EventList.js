import React, { useState } from 'react'

export default function EventList({ events, handleClick }) {
    return (
        <div>
            {events.map((events) =>
                <React.Fragment key={events.id}>
                    <h2>
                        {events.title}
                    </h2>
                    <button onClick={() => handleClick(events.id)}>Delete</button>
                </React.Fragment>)
            }
        </div>
    )
}
