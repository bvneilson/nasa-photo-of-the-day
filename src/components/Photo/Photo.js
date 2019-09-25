import React from "react";

const Photo = props => {
  if (props.picture) {
    return (
      <a href="#image-modal" data-toggle="modal">
        <img
          src={props.picture}
          alt="NASA pic of the day"
          className="card-img-top"
        />
      </a>
    );
  } else if (props.videoUrl) {
    return (
      <iframe
        width="100%"
        height="500"
        src={props.videoUrl}
        frameborder="0"
        allow="autoplay; encrypted-media"
        title="NASA Video"
      ></iframe>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Photo;
