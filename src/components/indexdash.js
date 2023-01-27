import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, Route } from "react-router-dom";

import "./style.css";

export const Indexdash = () => {
  const [vid, setVid] = useState(0);
  const [vdata, setVdata] = useState([{}]);

  const getData = () => {
    Axios.post("http://localhost:8000/api/dash/", {
      vid: vid,
    }).then((response) => {
      setVdata(response.data);
    });
    console.log(vid);
    console.log(vdata[0]);
  };
  return (
    <div className="page">
      <div className="container">
        <div className="sel">
          <label>Vehicle_ID : </label>

          <select
            inputMode="mulitple"
            onChange={(event) => {
              setVid(event.target.value);
            }}
          >
            <option defaultValue="Select">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>EV_2W_104</option>
            <option>EV_2W_105</option>
            <option>EV_2W_106</option>
          </select>
        </div>

        <button className="fbutton" onClick={getData}>
          Get Data
        </button>
      </div>

      <h1>NIKOLA CHARGING PVT LTD</h1>

      <div className="container">
        <div className="variable-box">
          <h2>State</h2>
          <p>{vdata[0].state}</p>
        </div>
        <div className="variable-box">
          <h2>Region</h2>
          <p>{vdata[0].region}</p>
        </div>
        <div className="variable-box">
          <h2>Vehicle ID</h2>
          <p>{vdata[0].vid}</p>
        </div>
        <div className="variable-box">
          <h2>BMS ID</h2>
          <p>{vdata[0].bmsid}</p>
        </div>
      </div>
      <div className="bcls">
        <button className="fbutton">
          <Link className="black" to="/fault-detection" state={{ data: vdata }}>
            Fault Detection
          </Link>
        </button>
        <button className="fbutton">
          <Link
            className="black"
            to="/battery-analysis"
            state={{ data: vdata }}
          >
            Battery Analysis
          </Link>
        </button>
      </div>
    </div>
  );
};
