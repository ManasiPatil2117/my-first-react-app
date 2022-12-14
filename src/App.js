import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Model from './components/Model';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
function App() {
  const [showModel, setShowModel] = useState(false)
  const [disp, setDisp] = useState(false)
  const [eventForm, setEventForm] = useState(false)
  const [events, showEvents] = useState([])
  const addEvent= (event) =>{
    showEvents((prevEvent)=>{
      return [...prevEvent,event]
    })
  }
  const handleClick = (id) => {
    // showEvents(events.filter((e)=>{
    //   return id !== e.id
    // }))
    showEvents((prevEvent) => {
      return prevEvent.filter((e) => {
        return id !== e.id
      })
    })
  }
  const handleClose = () => {
    setShowModel(false)
  }
  const subtitle = ['a', 'b']
  return (
    <div className="App">
      <Title title="Mario Kingdom" subtitle={subtitle} />
      <Title title="second title" subtitle="second subtitle" />
      {!disp && (<button onClick={() => setDisp(true)}>Show</button>)}
      {disp && (<button onClick={() => setDisp(false)}>Hide</button>)}

      {disp && < EventList events={events} handleClick={handleClick} />}
      <br />
      <button onClick={() => setShowModel(true)}>Show Model</button>
      {showModel && <Model handleClose={handleClose} isSaleModal={true}>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate?</p>
      </Model>}
      <br />
      <button onClick={()=>setEventForm(true)}>Add new Event</button>
      {eventForm && <NewEventForm setEventForm={setEventForm} addEvent={addEvent}/>}
      
    </div>
  );
}

export default App;
