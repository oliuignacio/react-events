const url = "http://localhost:3001/events"

export const postEvent = (event) => {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(event),
  })
  .then((result)=>result.json())
  .catch(error=>console.log('Error in postEvent service', error));
};

export const getEvents = async () => {
  try {
    const result = await fetch(url);
    console.log("here", result)
    return await result.json();
  } catch (error) {
    console.log('Error in getEvents:', error);
  }
}

export const sortEvents = (arr)=> arr.sort((a,b)=> {
  if (a.date < b.date) {
    return -1;
  }
  else if (a.date > b.date) {
   return 1;
  }  
  return 0;
});


// export const filterOldEvents = (arr) => {
//   return arr=arr.filter((a) => String(a.date) > String(Date.now()))
// };