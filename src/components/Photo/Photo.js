import React, { useEffect, useState } from "react";

const Photo = props => {

  if (!props.picture) {
    return <h3>Loading...</h3>;
  }

  return (
      <img src={props.picture} alt="NASA pic of the day" className="card-img-top" />
  );
}

export default Photo;
