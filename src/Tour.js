import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,removeTour}) => {
  const [isExpanded,setExpanded] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="Image"></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">₹{price}</div>
        </div>
        <p>
          {isExpanded ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "show less" : "show more"}
        </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
