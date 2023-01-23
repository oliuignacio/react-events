import Event from './Event';

function EventsList ({events, setEvents}) {
  return (
    <>
    {events.map((event, key)=>(
    <Event event={event} setEvents={setEvents} key={key} id={key}/>
    ))}
    </> 
  )
}

export default EventsList;