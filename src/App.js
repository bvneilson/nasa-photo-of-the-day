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
  const [selectDate, setSelectDate] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=aSw2gAHouRUnnw4sqxCAepY9kSviDYHQpxGPcxGl")
      .then(res => {
        setNasaData(res.data);
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
          />
        </div>
        <div className="card photo col-md-8">
          <Photo nasaData={nasaData} />
          <div className="card-body">
            <Title nasaData={nasaData} />
            <Date nasaData={nasaData} />
            <Summary nasaData={nasaData} />
          </div>
        </div>
      </div>
      <Footer />
      <Modal nasaData={nasaData} />
    </div>
  );
}

export default App;
