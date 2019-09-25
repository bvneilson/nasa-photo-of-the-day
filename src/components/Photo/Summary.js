import React from "react";

const Summary = props => {
  if (!props.summary) {
    return <h3>Loading...</h3>;
  }

  return <p className="card-text">{props.summary}</p>;
};

export default Summary;
