import React, { useEffect } from "react";
import axios from "axios";

const Photo = props => {

  useEffect(() => {

    // async function fetchData() {
    //   try {
    //     const photo = await axios.get("https://api.nasa.gov/planetary/apod?api_key=aSw2gAHouRUnnw4sqxCAepY9kSviDYHQpxGPcxGl");
    //     props.setNasaData(photo.data);
    //     console.log(photo.data);
    //   } catch (err) {
    //     console.log(err);
    //   } //try block
    // } // fetchData()
    //
    // fetchData();

    axios.get("https://api.nasa.gov/planetary/apod?api_key=aSw2gAHouRUnnw4sqxCAepY9kSviDYHQpxGPcxGl").then(res => {
      props.setNasaData(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

  }, [])

  if (!props.nasaData) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="photo">
      <img src={props.nasaData.hdurl} alt="NASA pic of the day" />
      <p>
        <strong>{props.nasaData.date}</strong> {props.nasaData.explanation}
      </p>
    </div>
  );
}

export default Photo;
