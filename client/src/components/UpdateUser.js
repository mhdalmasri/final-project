import React, { Component } from "react";

export default class UpdateUser extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#updateUserModal"
        >
          updateUser modal
        </button>

        <div
          className="modal fade"
          id="updateUserModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Update User
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
                <form
                  method="post"
                  action="http://localhost:5000/api/users/update"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <b>Name:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <b>Email:</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter new email"
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
                      placeholder="Enter new Password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Update"
                    />
                    <input
                      className="btn btn-danger"
                      defaultValue="Delete Account"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
