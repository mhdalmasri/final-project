import React, { Component } from "react";
import logo from "../img/images.jpeg";

const divStyle = {
  width: "15rem"
};
export default class ToyThumb extends Component {
  render() {
    return (
      <div class="card" style={divStyle}>
        <img src={logo} class="card-img-top" alt="img" />
        <div class="card-body">
          <h5 class="card-title">Toy name</h5>
          <p class="card-text">
           example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}
