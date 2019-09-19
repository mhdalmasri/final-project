import React, { Component } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import logo from "../img/images.jpeg";

const Landing = props => (
  <div className="d-flex align-items-center flex-column justify-content-center ">
    <div className="d-flex ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Login
            </a>
            <a
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Register
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <Login />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <Register />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
