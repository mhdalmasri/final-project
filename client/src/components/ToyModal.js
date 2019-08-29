import React, { Component } from "react";
import logo from "../img/images.jpeg";

export default class ToyModal extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="d-flex flex-column col-md-4">
              <img src={logo} className="card-img" alt="..." />
              <button type="button" class="btn btn-primary">
                Request
              </button>
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">Toy Name</h1>
                <span className="badge badge-pill badge-success">to Swap</span>
                <span className="badge badge-pill badge-danger">to Give</span>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Description:</th>
                      <td>Nice cute toy</td>
                    </tr>
                    <tr>
                      <th scope="row">Age:</th>
                      <td>3-6</td>
                    </tr>
                    <tr>
                      <th scope="row">Condition:</th>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <th scope="row">Location:</th>
                      <td>Mitte</td>
                    </tr>
                    <tr>
                      <th scope="row">Category:</th>
                      <td>Stuffed Animal</td>
                    </tr>
                  </tbody>
                </table>
                <p className="card-text">
                  <small className="text-muted">By: Nadoo</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
