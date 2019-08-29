import React, { Component } from "react";
const axios = require('axios');
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = { toys: [] }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/toys/my')
    .then(res => console.log(res.data))
  }
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
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
