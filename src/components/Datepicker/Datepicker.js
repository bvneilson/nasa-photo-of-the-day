import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = props => {
  return (
    <div>
      <p>Select Date</p>
      <DatePicker
        selected={props.selectDate}
        onChange={date => {
          axios
            .get(
              `https://api.nasa.gov/planetary/apod?api_key=aSw2gAHouRUnnw4sqxCAepY9kSviDYHQpxGPcxGl&date=${date
                .toISOString()
                .substring(0, 10)}`
            )
            .then(res => {
              props.setNasaData(res.data);
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
          props.setSelectDate(date);
        }}
      />
    </div>
  );
};

export default Datepicker;
