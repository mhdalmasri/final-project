import React from "react";
import { ToysContext } from "../ContextApi/ToysContext";
import ToyThumb from "../components/ToyThumb";
import AddToy from "../components/AddToy";
import add from "../img/add.png";

const divStyle = {
  width: "13rem"
};
const imgStyle = {
 height: "10rem"
};

const ToysList = props => (
  <ToysContext.Consumer>
    {({ currentUserToys,loading }) =>  loading === true ? (
            <div class="d-flex justify-content-center m-5">
              <div class="spinner-grow text-info m-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) :(
      <div className="d-flex flex-wrap justify-content-start mt-5 px-5">
        <div className="card m-2" style={divStyle}>
          <img src={add} className="card-img-top" alt="img" style={imgStyle} />
          <div className="card-body">
            <h5 className="card-title text-capitalize text-center">
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
          <div className="mt-5 bold"></div>
        )}
      </div>
    )}
  </ToysContext.Consumer>
);

export default ToysList;
