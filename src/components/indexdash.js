import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, Route } from "react-router-dom";

import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export const Indexdash = () => {
  const [vid, setVid] = useState(0);
  const [vdata, setVdata] = useState([{}]);

  const getData = () => {
    Axios.post("http://54.95.196.89:8000/api/dash/", {
      vid: vid,
    }).then((response) => {
      setVdata(response.data);
    });
    console.log(vid);
    console.log(vdata);
  };
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        <Navbar />
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
              <option>V123456789</option>
              <option>V987654321</option>
              {/* <option>EV_2W_104</option>
              <option>EV_2W_105</option>
              <option>EV_2W_106</option> */}
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
            <p>{vdata[0].State}</p>
          </div>
          <div className="variable-box">
            <h2>Region</h2>
            <p>{vdata[0].Region}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle No.</h2>
            <p>{vdata[0].Veh_No}</p>
          </div>
          <div className="variable-box">
            <h2>Owner Name</h2>
            <p>{vdata[0].Owner_Name}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle Stat</h2>
            <p>{vdata[0].Vehicle_Stat}</p>
          </div>
        </div>
        <div className="container">
          <div className="variable-box">
            <h2>Battery Level</h2>
            <p>{vdata[0].Batt_Lvl}</p>
          </div>
          <div className="variable-box">
            <h2>Rem range</h2>
            <p>{vdata[0].Rem_rnge}</p>
          </div>
          <div className="variable-box">
            <h2>Charge</h2>
            <p>{vdata[0].Charge_S}</p>
          </div>
          <div className="variable-box">
            <h2>Energy Consumption</h2>
            <p>{vdata[0].Energ_Conspn}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle Usage Pattern</h2>
            <p>{vdata[0].Veh_Usg_Patter}</p>
          </div>
        </div>
        <div className="bcls">
          <button className="fbutton">
            <Link
              className="black"
              to="/fault-detection"
              state={{ data: vdata }}
            >
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
    </div>
  );
};
