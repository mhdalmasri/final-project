import React, { Component } from "react";
import logo from "../img/images.jpeg";

const divStyle = {
  width: "15rem"
};
export default class ToyThumb extends Component {
  render() {
    return (
      <div className="card" style={divStyle}>
        <img src={logo} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">Toy name</h5>
          <p className="card-text">
           example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}
