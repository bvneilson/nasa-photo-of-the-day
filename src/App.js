import React, { useState, useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header/Header.js";
import Photo from "./components/Photo/Photo.js";
import Date from "./components/Photo/Date.js";
import Summary from "./components/Photo/Summary.js";
import Footer from "./components/Footer/Footer.js";
import Modal from "./components/Modal/Modal.js";
import Datepicker from "./components/Datepicker/Datepicker.js";
import Title from "./components/Title/Title.js";

function App() {
  const [nasaData, setNasaData] = useState();
  const [picture, setPicture] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [summary, setSummary] = useState();
  const [selectDate, setSelectDate] = useState();
  const [axiosUrl, setAxiosUrl] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=aSw2gAHouRUnnw4sqxCAepY9kSviDYHQpxGPcxGl"
  );

  useEffect(() => {
    axios
      .get(axiosUrl)
      .then(res => {
        setNasaData(res.data);
        if (res.data.media_type === "image") {
          setPicture(res.data.hdurl);
        } else {
          setVideoUrl(res.data.url);
        }
        setDate(res.data.date);
        setSummary(res.data.explanation);
        setTitle(res.data.title);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!nasaData) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-2">
          <Datepicker
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            setNasaData={setNasaData}
            setPicture={setPicture}
            setDate={setDate}
            setSummary={setSummary}
            setVideoUrl={setVideoUrl}
            setTitle={setTitle}
          />
        </div>
        <div className="card photo col-md-8">
          <Photo picture={picture} videoUrl={videoUrl} />
          <div className="card-body">
            <Title title={title} />
            <Date date={date} />
            <Summary summary={summary} />
          </div>
        </div>
      </div>
      <Footer />
      <Modal picture={picture} videoUrl={videoUrl} title={title} />
    </div>
  );
}

export default App;
