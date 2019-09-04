import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const axios = require("axios");
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", this.state)
      .then(res => {
        const cookies = new Cookies();
        cookies.set("myToken", res.data.token, { path: "*" });
        cookies.set("myId", res.data._id, { path: "*" });
        console.log(cookies.get("myCookie"));
      });
  };
  changHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="card">
        <div className="card-body px-lg-5 pt-0">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="email">
                <b>Email:</b>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                id="email"
                onChange={this.changHandler}
                value={this.state.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <b>Password:</b>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                id="password"
                onChange={this.changHandler}
                value={this.state.password}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
