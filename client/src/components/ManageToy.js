import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ToysContext } from "../ContextApi/ToysContext";
export default class ManageToy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      deleteModal: false,
      updateModal: false,
      updatedToy: {}
    };
    this.toggle = this.toggle.bind(this);
    this.deleteToggle = this.deleteToggle.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  deleteToggle() {
    this.setState(prevState => ({
      deleteModal: !prevState.deleteModal
    }));
  }
  updateToggle() {
    this.setState(prevState => ({
      updateModal: !prevState.updateModal
    }));
  }
  deleteToy(e, onDeleteToy) {
    const toyId = e.target.name;
    onDeleteToy(toyId);
    this.deleteToggle();
  }
  updateToy = (e, onUpdateToy) => {
    e.preventDefault();
    const id = this.props.toy._id;
    const url = `http://localhost:5000/api/toys/update/${id}`;
    const data = this.state.updatedToy;
    onUpdateToy(url, data);
    console.log(data);
    this.updateToggle();
  };
  handelOnChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "radio") {
      value = e.target.id;
    } else {
      value = e.target.value;
    }
    this.setState(state => {
      const obj = state.updatedToy;
      obj[name] = value;
      console.log(JSON.stringify(obj));
      return JSON.stringify(obj);
    });
  };
  render() {
    let url = `http://localhost:5000/api/toys/update/${this.props.toy._id}`;
    return (
      <ToysContext.Consumer>
        {({ onDeleteToy, onUpdateToy }) => (
          <div>
            <div className="d-flex justify-content-around">
              <div>
                <Button color="outline-info btn-sm" onClick={this.toggle}>
                  Update
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader className="text-capitalize" toggle={this.toggle}>
                    Update {this.props.toy.toyName}
                  </ModalHeader>
                  <ModalBody>
                    <form
                      method="POST"
                      action={url}
                      encType="multipart/form-data"
                    >
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name:</label>
                        <input
                          name="toyName"
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          defaultValue={this.props.toy.toyName}
                          onChange={this.handelOnChange}
                          autoFocus
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Description:
                        </label>
                        <textarea
                          name="description"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="describe your toy"
                          defaultValue={this.props.toy.description}
                          onChange={this.handelOnChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="condition">Condition:</label>
                        <br></br>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            onChange={this.handelOnChange}
                            id="Great"
                            name="condition"
                            className="custom-control-input"
                            value="Great"
                            defaultChecked={
                              this.props.toy.condition === "Great"
                                ? "checked"
                                : false
                            }
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="Great"
                          >
                            Great
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            onChange={this.handelOnChange}
                            id="Good"
                            name="condition"
                            className="custom-control-input"
                            value="Good"
                            defaultChecked={
                              this.props.toy.condition === "Good"
                                ? "checked"
                                : false
                            }
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="Good"
                          >
                            Good
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            onChange={this.handelOnChange}
                            id="Fine"
                            name="condition"
                            className="custom-control-input"
                            value="Fine"
                            defaultChecked={
                              this.props.toy.condition === "Fine"
                                ? "checked"
                                : false
                            }
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="Fine"
                          >
                            Fine
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <select
                          name="location"
                          className="custom-select"
                          onChange={this.handelOnChange}
                          defaultValue={this.props.toy.location}
                        >
                          <option value="Charlottenburg-Wilmersdorf">
                            Charlottenburg-Wilmersdorf
                          </option>
                          <option value="Friedrichshain-Kreuzberg">
                            Friedrichshain-Kreuzberg
                          </option>
                          <option value="Lichtenberg">Lichtenberg</option>
                          <option value="Marzahn-Hellersdorf">
                            Marzahn-Hellersdorf
                          </option>
                          <option value="Mitte">Mitte</option>
                          <option value="Neukölln">Neukölln</option>
                          <option value="Pankow">Pankow</option>
                          <option value="Reinickendorf">Reinickendorf</option>
                          <option value="Spandau">Spandau</option>
                          <option value="Steglitz-Zehlendorf">
                            Steglitz-Zehlendorf
                          </option>
                          <option value="Tempelhof-Schöneberg">
                            Tempelhof-Schöneberg
                          </option>
                          <option value="Treptow-Köpenick">
                            Treptow-Köpenick
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select
                          className="custom-select"
                          name="category"
                          defaultValue={this.props.toy.category}
                          onChange={this.handelOnChange}
                        >
                          <option value="Action & Adventure">
                            Action & Adventure
                          </option>
                          <option value="Games & Puzzles">
                            Games & Puzzles
                          </option>
                          <option value="Build & Play sets">
                            Build & Play sets
                          </option>
                          <option value="Dolls & Accessories">
                            Dolls & Accessories
                          </option>
                          <option value="Outdoor">Outdoor</option>
                          <option value="Multimedia">Multimedia</option>
                          <option value="Stuffed Animals">
                            Stuffed Animals
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="age">Age rang:</label>
                        <select
                          className="custom-select"
                          name="age"
                          onChange={this.handelOnChange}
                        >
                          <option defaultValue>Select Age range</option>
                          <option value="0 - 3">0 - 3</option>
                          <option value="3 - 6">3 - 6</option>
                          <option value="6 - 9">6 - 9</option>
                          <option value="9 - 12">9 - 12</option>
                          <option value="12 - 15">12 - 15</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="img">Photo:</label>
                        <div className="custom-file">
                          <input
                            onChange={this.handelOnChange}
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                            name="url"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <br></br>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            onChange={this.handelOnChange}
                            id="swap"
                            name="status"
                            className="custom-control-input"
                            value="swap"
                            defaultChecked={
                              this.props.toy.status === "swap"
                                ? "checked"
                                : false
                            }
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="swap"
                          >
                            To Swap
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            onChange={this.handelOnChange}
                            id="get"
                            name="status"
                            className="custom-control-input"
                            value="get"
                            defaultChecked={
                              this.props.toy.status === "get"
                                ? "checked"
                                : false
                            }
                          />
                          <label className="custom-control-label" htmlFor="get">
                            To Get
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around">
                        <button
                          className="btn btn-outline-primary btn-sm mx-1"
                          type="submit"
                        >
                          update
                        </button>
                      </div>
                    </form>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Button
                  className="mx-1"
                  color="outline-danger btn-sm"
                  onClick={this.deleteToggle}
                >
                  Delete
                </Button>
                <Modal
                  isOpen={this.state.deleteModal}
                  toggle={this.deleteToggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.deleteToggle}>
                    Delete Confirmation!
                  </ModalHeader>
                  <ModalBody>
                    Do you want to delete {this.props.toy.toyName}?
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      name={this.props.toy._id}
                      color="outline-danger"
                      onClick={e => this.deleteToy(e, onDeleteToy)}
                    >
                      Yes
                    </Button>
                    <Button color="outline-primary" onClick={this.deleteToggle}>
                      No
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </ToysContext.Consumer>
    );
  }
}
