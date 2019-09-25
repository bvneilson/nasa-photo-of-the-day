import React from "react";

const Date = props => {
  if (!props.nasaData.date) {
    return <h3>Loading...</h3>;
  }

  return <h5 className="card-text">{props.nasaData.date}</h5>;
};

export default Date;
