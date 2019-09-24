import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js"
import Photo from "./components/Photo/Photo.js"
import Footer from "./components/Footer/Footer.js"

function App() {

  const [nasaData, setNasaData] = useState();

  return (
    <div className="App">
      <Header />
      <Photo setNasaData={setNasaData} nasaData={nasaData} />
      <Footer />
    </div>
  );
}

export default App;
