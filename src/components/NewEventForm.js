import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ setEventForm }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const handleReset = () => {
        setTitle('')
        setDate('')
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const element={
            title:title,
            date:date,
            id: Math.floor(Math.random()*1000)
        }
        console.log(element)
        handleReset()
    }
    return (
        <div className='Form-Modal'>
            <form className='new-event-form' onSubmit={handleSubmit} >
                <label>
                    <span>Event title:</span>
                    <input type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <br />
                <label>
                    <span>Select date:</span>
                    <input type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </label>
                <br />
                <button id='submit-btn'>Submit</button>
                <button id='close-btn' onClick={() => setEventForm(false)}>Close</button>
                <p>Title- {title} Date- {date}</p>
                <p onClick={handleReset}>Reset the form</p>
            </form>
        </div>
    )
}
