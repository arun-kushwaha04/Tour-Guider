import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return (
    <div>
      <div className="div title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key = {tour.id} {...tour} removeTour={removeTour}></Tour>
      }
      )}
    </div>
  );
};

export default Tours;
