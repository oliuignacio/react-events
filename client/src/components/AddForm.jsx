import { useState } from "react";
import moment from 'moment'; 
import { postEvent, getEvents, sortEvents } from '../utils/Events-services'

function AddEvent({setEvents}) {

  function submitHandler(e) {
    e.preventDefault();
    const event = {
      title: String(e.target.title.value),
      date: String(e.target.date.value),
      venue: String(e.target.venue.value),
    }
    if (event.title===""||event.date===""||event.venue==="") {
      throw new Error('400, parameters missing');
    } else {

      if (Date.now() < new Date(event.date)) {
        postEvent(event).then((eventFromDB) => {
          console.log("dfdfdf", eventFromDB);
          setEvents((prevEvents) => sortEvents([...prevEvents, eventFromDB]));
          e.target.reset();
        })
          .catch((error) => console.log(error));
      } else return alert('Cant create events from the past');
    }
  }

  let today=moment(Date.now()).format('YYYY-MM-DDThh:mm');

  console.log(today);
  return (
    <div className='form-container'>
      <h1>Create a new event</h1>

    <form onSubmit={submitHandler}>
      <label>TITLE</label>
      <div>
      <input type="text" name="title" placeholder="Insert a title..."/>
      </div>
      <label>DATE</label>
      <div>
      <input type="datetime-local" name="date" min={today}/>
      </div>
      <label>VENUE</label>
      <div>
      <input type="text" name="venue" placeholder="Insert a venue..."/>
      </div>
      <div>
      <button type="submit">Create</button>
      </div>
    </form>
    </div>
  )


}


export default AddEvent;