
import './App.css';
import Navbar from'./components/Navbar';
import AddForm from'./components/AddForm';
import EventsList from './components/EventsList';
import { useEffect, useState } from 'react';
import { getEvents, sortEvents, filterOldEvents } from './utils/Events-services';

function App() {
  
  const [events, setEvents] = useState([]);
  
  useEffect(()=> {
    getEvents().then((result) => setEvents(sortEvents(result)));
  }, []);

  
  console.log("getting Events from server  :", events);
  
  return (
    <>
    <div className='navbar-container'>
    <Navbar/>
    </div>
    <div className='main-container'>
        <AddForm setEvents={setEvents}/>
      <div className='eventslist-container' id="list">
        <EventsList events={events.filter((event)=>new Date(event.date)>Date.now())} setEvents={setEvents}/>
      </div>
    </div>
    </>
  );
}

export default App;