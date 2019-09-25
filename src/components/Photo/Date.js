import React from "react";


const Date = props => {

  if (!props.date) {
    return <h3>Loading...</h3>;
  }

  return (
    <p className="card-text">
      <strong>{props.date}</strong>
    </p>
  )
}

export default Date;
