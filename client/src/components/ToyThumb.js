import React from "react";
import logo from "../img/images.jpeg";
import ViewToyModal from "./ViewToyModal";

const divStyle = {
  width: "15rem"
};
const ToyThumb = (props) => (
  <div className="card m-2" style={divStyle}>
    <img src={logo} className="card-img-top" alt="img" />
    <div className="card-body">
          <h5 className="card-title">{props.toy.toyName}</h5>
          <ViewToyModal
            toy = {props.toy}
          />
        </div>
      </div>
)

export default ToyThumb