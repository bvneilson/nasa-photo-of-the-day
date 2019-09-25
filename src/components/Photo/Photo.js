import React from "react";

const Photo = props => {
  if (props.nasaData.hdurl) {
    return (
      <a href="#image-modal" data-toggle="modal">
        <img
          src={props.nasaData.hdurl}
          alt="NASA pic of the day"
          className="card-img-top"
        />
      </a>
    );
  } else if (props.nasaData.url) {
    return (
      <iframe
        width="100%"
        height="500"
        src={props.nasaData.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="NASA Video"
        allowFullScreen
      ></iframe>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Photo;
