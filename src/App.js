import React, { useState, useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "./App.css";
import Header from "./components/Header/Header.js"
import Photo from "./components/Photo/Photo.js"
import Date from "./components/Photo/Date.js";
import Summary from "./components/Photo/Summary.js";
import Footer from "./components/Footer/Footer.js"

function App() {

  const [nasaData, setNasaData] = useState();
  const [picture, setPicture] = useState();
  const [date, setDate] = useState();
  const [summary, setSummary] = useState();

  useEffect(() => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key=aSw2gAHouRUnnw4sqxCAepY9kSviDYHQpxGPcxGl").then(res => {
      setNasaData(res.data);
      setPicture(res.data.hdurl);
      setDate(res.data.date);
      setSummary(res.data.explanation);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

  }, [])

  if (!nasaData) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="App">
      <Header />
      <div className="card photo">
        <a href="#image-modal" data-toggle="modal">
          <Photo picture={picture} />
        </a>
        <div className="card-body">
          <Date date={date} />
          <Summary summary={summary} />
        </div>
      </div>
      <Footer />
      <div className="modal fade" id="image-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
            </div>
            <div className="modal-body">
              <Photo picture={picture} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
