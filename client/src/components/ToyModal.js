import React, { Component } from "react";
import logo from "../img/images.jpeg";

export default class ToyModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id={this.props.toyId}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  {this.props.name}
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="d-flex flex-column justify-content-between col-md-4">
                      <img src={logo} className="card-img" alt="..." />
                      <button type="button" className="btn btn-primary">
                        Request
                      </button>
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th scope="row">Description:</th>
                              <td>{this.props.description}</td>
                            </tr>
                            <tr>
                              <th scope="row">Age:</th>
                              <td>{this.props.age}</td>
                            </tr>
                            <tr>
                              <th scope="row">Condition:</th>
                              <td>{this.props.condition}</td>
                            </tr>
                            <tr>
                              <th scope="row">Location:</th>
                              <td>{this.props.location}</td>
                            </tr>
                            <tr>
                              <th scope="row">Category:</th>
                              <td>{this.props.category}</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="card-text">
                          <small className="text-muted">By: Nadoo</small>
                          {/* {toy.status === "swap"} ?{
                          <span className="badge badge-pill badge-success">
                            to Swap
                          </span>}
                          :
                          {<span className="badge badge-pill badge-danger">}
                            to Give
                          </span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
