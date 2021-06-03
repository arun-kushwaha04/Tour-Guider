import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Error from './Error'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [tours, setTours] = useState([]);


    const removeTour = (id) => {
      const newTour = tours.filter(tour => tour.id!==id);
      setTours(newTour);
    }

    const fetchTours = async() => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(url);
        if(res.status>=200 && res.status<=300){
          const data = await res.json();
          setTours(data);
        }
        else {
          setError(true);
        }
        
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }

    useEffect(() =>{
      fetchTours();
    },[]);
    
    if(isLoading) {
      return <Loading/>
    }
    if(isError) {
      return <Error/>
    }

    if(tours.length === 0){
      return <main>
        <div className="title">
          <h2>no tour left</h2>
          <button className="btn" onClick={() => fetchTours()} >refresh</button>
        </div>
      </main>
       
    }
    return(
      <main>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </main>      
    );
}

export default App