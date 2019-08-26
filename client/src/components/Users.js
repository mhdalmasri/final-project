import React, { Component } from "react";

export default class Users extends Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.fetchDidMount();
  }
  fetchDidMount() {
    const axios = require("axios");
    axios.get(`http://localhost:5000/api/users/all/`).then(res =>
      this.setState({
        users: res.data
      })
    );
  }

  render() {
    return (
      <div>
        <h1>hiiii</h1>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
