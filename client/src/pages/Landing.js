import React, { Component } from "react";
import Auth from "../components/Auth";
import Img from "../components/Img";


export default class Landing extends Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-column justify-content-center ">
        <div className="d-flex ">
          <Img />
          <Auth />
        </div>
      </div>
    );
  }
}
