import React from 'react';
import Tour from './Tour';

const Tours = ({ tours , deleteTour, refresh}) => {
  if(tours.length === 0){
    return(
      <button className='btn-refresh' onClick={refresh}>Refresh</button>
    )
  }
  return (
    <div className='tours-container'>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>

      )
      )}
    </div>
  )
}

export default Tours