import React, { Component } from "react";
import logo from "../img/images.jpeg";

const divStyle = {
  width: "15rem"
};
export default class ToyThumb extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props.toyId)
   let hashtagName = this.props.toyId.split("")
   hashtagName.unshift("#")
   const x = hashtagName.join("")
   console.log(x)
   const element = document.getElementById(this.props.toyId)
   return element.dataset.target=x
  }
  render() {
    return (
      <div className="card m-2" style={divStyle}>
        <img src={logo} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <button
          id={this.props.toyId}
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
        >
          View
        </button>
        </div>
      </div>
    );
  }
}
