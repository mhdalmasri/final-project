import React, { Component } from 'react'
import logo from "../img/images.jpeg";

export default class MyToy extends Component {
  render() {
    return (
      <div>
          <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myToyModal"
        >
          myToy modal
        </button>

        <div
          className="modal fade"
          id="myToyModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Toy Name
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
                    <div className="d-flex flex-column col-md-4">
                      <img src={logo} className="card-img" alt="..." />
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
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
                          <span className="badge badge-pill badge-success">
                            to Swap
                          </span>
                          <span className="badge badge-pill badge-danger">
                            to Give
                          </span>
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
    )
  }
}
