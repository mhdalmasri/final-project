import React, { Component } from "react";
import logo from "../img/images.jpeg";
import UpdateToy from "./UpdateToy";

const divStyle = {
  width: "15rem"
};
export default class MYToyThumb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card m-2" style={divStyle}>
        <img src={logo} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <UpdateToy
            toyId={this.props.toyId}
            name={this.props.name}
            description={this.props.description}
            condition={this.props.condition}
            age={this.props.age}
            location={this.props.location}
            status={this.props.status}
            category={this.props.category}
          />
        </div>
      </div>
    );
  }
}
