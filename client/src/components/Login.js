import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form method="post" action="http://localhost:5000/api/users/login">
          <div className="form-group">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
           
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
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
              required
            />
          </div>
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}
