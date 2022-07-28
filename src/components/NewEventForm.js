import { useRef, useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ setEventForm , addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('Pune')
    // const title = useRef()
    // const date = useRef()
    const handleReset = () => {
        setTitle('')
        setDate('')
        setLocation('Pune')
        // title.current.value =''
        // date.current.value =''
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const element={
            // title:title.current.value,
            // date:date.current.value,
            title:title,
            date:date,
            location:location,
            id: Math.floor(Math.random()*1000)
        }
        addEvent(element)
        handleReset()
        setEventForm(false)
    }
    return (
        <div className='Form-Modal'>
            <form className='new-event-form' onSubmit={handleSubmit} >
                <label>
                    <span>Event title:</span>
                    <input type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        // ref={title}
                    />
                </label>
                <br />
                <label>
                    <span>Select date:</span>
                    <input type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        // ref={date}
                    />
                </label>
                <br />
                <label>
                    <span>Event Location:</span>
                    <select name="Location" onChange={(e)=>setLocation(e.target.value)}>
                        <option value="pune">Pune</option>
                        <option value="nashik">Nashik</option>
                        <option value="kalwan">Kalwan</option>
                    </select>
                </label>
                <button id='submit-btn'>Submit</button>
                <button id='close-btn' onClick={() => setEventForm(false)}>Close</button>
                <p>Title- {title} Date- {date}</p>
                <p onClick={handleReset}>Reset the form</p>
            </form>
        </div>
    )
}
