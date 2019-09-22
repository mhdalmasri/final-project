import React from "react";
import ViewToyModal from "./ViewToyModal";
import ManageToy from "./ManageToy";

const divStyle = {
  width: "15rem"
};
const imgStyle = {
  height: "15rem"
};
const ToyThumb = React.memo(props => (
  <div className="card m-2" style={divStyle}>
    <img
      src={props.toy.url}
      className="card-img-top"
      alt="img"
      style={imgStyle}
    />
    <div className="card-body">
      <h5 className="card-title text-capitalize font-weight-bold">
        {props.toy.toyName}
      </h5>
      {props.route === "MainPage" ? (
        <ViewToyModal toy={props.toy} />
      ) : (
        <ManageToy toy={props.toy} />
      )}
    </div>
  </div>
));

export default ToyThumb;
