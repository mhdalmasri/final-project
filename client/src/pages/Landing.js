import React, { Component } from "react";
import Auth from "../components/Auth";
import Img from "../components/Img";

export default class Landing extends Component {
  render() {
    return (
      <div className="d-flex align-items-stretch">
        <Img />
        <Auth />
      </div>
    );
  }
}
