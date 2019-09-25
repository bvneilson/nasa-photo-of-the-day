import React from "react";

const Summary = props => {
  if (!props.nasaData.explanation) {
    return <h3>Loading...</h3>;
  }

  return <p className="card-text">{props.nasaData.explanation}</p>;
};

export default Summary;
