import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./style.css";

export const BatteryAnalysis = () => {
  const loc = useLocation();
  console.log(loc.state.data[0]);
  const data = loc.state.data[0];
  console.log(data);
  return (
    <>
      <div className="page">
        <h1>Battery Analysis</h1>
        <div className="container">
          <div className="variable-box">
            <h2>State</h2>
            <p>{data.state}</p>
          </div>
          <div className="variable-box">
            <h2>Region</h2>
            <p>{data.region}</p>
          </div>
          <div className="variable-box">
            <h2>Vehicle ID</h2>
            <p>{data.vid}</p>
          </div>
        </div>
        <div className="container">
          <button className="fbutton">
            <Link
              className="black"
              to="/battery2"
              state={{ batteryid: data.bmsid }}
            >
              Battery ID
            </Link>
          </button>
        </div>
      </div>
      {/* <div>
      <div>
        <h2>State</h2>
        <p>ABC_123</p>
      </div>
      <div>
        <h2>Region</h2>
        <p>ABC_123</p>
      </div>
      <div>
        <h2>Vehicle ID</h2>
        <p>ABC_123</p>
      </div>
      <div>
        <div>
          <Link to="/battery2">Battery ID</Link>
        </div>
      </div>
    </div> */}
    </>
  );
};
