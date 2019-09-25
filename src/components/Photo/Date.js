import React from "react";


const Date = props => {

  if (!props.date) {
    return <h3>Loading...</h3>;
  }

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let date = props.date.toLocaleString("en-US", options);

  return (
    <p className="card-text">
      <strong>{date}</strong>
    </p>
  )
}

export default Date;
