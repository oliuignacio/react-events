import moment from 'moment';

function Event ({event, setEvents, id}){
  const nextEvent=id;

  function prettifyDate (date) {
    date=new Date(date);
  return date.toDateString();
}

function littleDate (date) {
  date=new Date(date);
return moment(date).format("Do MMM");
}

  return (
    <>

    {nextEvent===0
    ?
    <div className="nextevent-container">
    <div className="nexttitle">
      <p>NEXT EVENT</p>
      <div className='littleDate'>
        <h1>{littleDate(event.date)}</h1>
      </div>
      <div className='next-desc'>
      <div><h1>{event.title}</h1></div>
      <div>
        <div>{prettifyDate(event.date)}</div>
        <div>{event.venue}</div>
        </div>
      </div>
      </div>  
    </div>
    :
    <div className="event-container">
      <div className="pretty-date"><h1>{littleDate(event.date)}</h1>
      </div>
      <div>
      <div>
        <h2>{event.title}</h2>
      </div>
      <div className='event-desc'>
      <div>{prettifyDate(event.date)}</div>
      <div>{event.venue}</div>
      </div>  
      </div>
    </div>
    }
    </>
  ) 



}

export default Event;