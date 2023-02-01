import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./style.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export const BatteryAnalysis = () => {
  const loc = useLocation();
  console.log(loc.state.data[0]);
  const data = loc.state.data[0];
  console.log(data);
  return (
    <div className="page">
      <Sidebar />
      <div className="home">
        <Navbar />
        <h1>Battery Analysis</h1>
        <div className="container">
          <div className="variable-box">
            <h2>State</h2>
            <p>{data.State}</p>
          </div>
          <div className="variable-box">
            <h2>Region</h2>
            <p>{data.Region}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle ID</h2>
            <p>{data.Vehicle_ID}</p>
          </div>
        </div>
        <div className="container">
          <button className="fbutton">
            <Link
              className="black"
              to="/battery2"
              state={{ batteryid: data.Batt_ID }}
            >
              Battery ID
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
