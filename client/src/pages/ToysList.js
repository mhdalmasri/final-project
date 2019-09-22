import React from "react";
import { ToysContext } from "../ContextApi/ToysContext";
import ToyThumb from "../components/ToyThumb";
import AddToy from "../components/AddToy";
import logo from "../img/images.jpeg";

const divStyle = {
  width: "13rem"
};
const imgStyle = {
 height: "10rem"
};

const ToysList = props => (
  <ToysContext.Consumer>
    {({ currentUserToys }) => (
      <div className="d-flex flex-wrap justify-content-around">
        <div className="card m-2" style={divStyle}>
          <img src={logo} className="card-img-top" alt="img" style={imgStyle} />
          <div className="card-body">
            <h5 className="card-title text-capitalize font-weight-bold text-center">
              New Toy
            </h5>
            <div className="d-flex justify-content-around">
              <AddToy />
            </div>
          </div>
        </div>

        {currentUserToys.length !== 0 ? (
          currentUserToys.map((toy, index) => {
            return (
              <div key={index}>
                <ToyThumb toy={toy} page="ToysList" />
              </div>
            );
          })
        ) : (
          <div className="mt-5 bold"> No results are found, Sorry 😞 </div>
        )}
      </div>
    )}
  </ToysContext.Consumer>
);

export default ToysList;
