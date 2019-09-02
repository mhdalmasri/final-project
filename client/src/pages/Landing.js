import React, { Component } from "react";
import Auth from "../components/Auth";
import Img from "../components/Img";
import UpdateToy from "../components/UpdateToy";
import MyToy from "../components/MyToy";
import ToyThumb from "../components/ToyThumb";
import UpdateUser from "../components/UpdateUser";
import AddToy from "../components/AddToy";
import ToyModal from "../components/ToyModal";
export default class Landing extends Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-column justify-content-center LandingPage">
        <div className="d-flex border" >
          <Img />
          <Auth />
        </div>
        <div>
          <ToyModal />
        <MyToy />
        <AddToy />
        <UpdateUser />
        <UpdateToy />
        <ToyThumb />
        </div>
        
      </div>
    );
  }
}
