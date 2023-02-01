import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Axios from "axios";

import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export const Battery2 = () => {
  const loc = useLocation();
  console.log(loc.state.batteryid);
  const battid = loc.state.batteryid;

  // const [vid, setVid] = useState(0);
  const [bdata, setBdata] = useState([{}]);
  const getBattery = () => {
    Axios.post("http://localhost:8000/api/dash/battery", {
      battid: battid,
    }).then((response) => {
      setBdata(response.data);
      console.log(response.data);
    });
  };
  console.log(bdata);
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        <Navbar />
        <div className="container">
          <div className="sel">
            <h2>BMS ID</h2>
            <p>{battid}</p>
          </div>

          <button className="fbutton" onClick={getBattery}>
            Get Battery Details
          </button>
        </div>

        <div className="container">
          <div className="variable-box">
            <h2>Battery Capacity</h2>
            <p>{bdata[0].Batt_cap}</p>
          </div>
          <div className="variable-box">
            <h2>Battery Voltage</h2>
            <p>{bdata[0].Batt_Volt}</p>
          </div>
          <div className="variable-box">
            <h2>Battery Current</h2>
            <p>{bdata[0].Batt_Cur}</p>
          </div>
          <div className="variable-box">
            <h2>Battery Temperature</h2>
            <p>{bdata[0].Batt_temp}</p>
          </div>
        </div>
        <div className="container">
          <div className="variable-box">
            <h2>Battery SOC</h2>
            <p>{bdata[0].Batt_SOC}</p>
          </div>
          <div className="variable-box">
            <h2>Battery SOH</h2>
            <p>{bdata[0].Batt_SOH}</p>
          </div>
          <div className="variable-box">
            <h2>Cycle Life</h2>
            <p>{bdata[0].Cycle_Life}</p>
          </div>
          <div className="variable-box">
            <h2>Calender Life</h2>
            <p>{bdata[0].Calend_Life}</p>
          </div>
          <div className="variable-box">
            <h2>Depth of Degradation</h2>
            <p>{bdata[0].DOD}</p>
          </div>
        </div>
        <div className="container">
          <button className="fbutton">
            <Link className="black" to="/cell-info">
              Cell Information
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
