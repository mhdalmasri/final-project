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
    return (
      <ToysContext.Consumer>
        {({ onDeleteToy, onUpdateToy }) => (
          <div>
            <div className="d-flex justify-content-around">
              <div>
                <Button color="outline-info" onClick={this.toggle}>
                  Update
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>Update Toy</ModalHeader>
                  <ModalBody>
                    <form
                      onSubmit={e => this.updateToy(e, onUpdateToy)}
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
                      <label htmlFor="condition">Condition:</label>
                      <br></br>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          onChange={this.handelOnChange}
                          id="great"
                          name="condition"
                          className="custom-control-input"
                          value="great"
                          defaultChecked={
                            this.props.toy.condition === "great"
                              ? "checked"
                              : false
                          }
                        />
                        <label className="custom-control-label" htmlFor="great">
                          Great
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          onChange={this.handelOnChange}
                          id="good"
                          name="condition"
                          className="custom-control-input"
                          value="good"
                          defaultChecked={
                            this.props.toy.condition === "good"
                              ? "checked"
                              : false
                          }
                        />
                        <label className="custom-control-label" htmlFor="good">
                          Good
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          onChange={this.handelOnChange}
                          id="fine"
                          name="condition"
                          className="custom-control-input"
                          value="fine"
                          defaultChecked={
                            this.props.toy.condition === "fine"
                              ? "checked"
                              : false
                          }
                        />
                        <label className="custom-control-label" htmlFor="fine">
                          Fine
                        </label>
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="location">Location:</label>
                        <select
                          name="location"
                          className="custom-select"
                          onChange={this.handelOnChange}
                          defaultValue={this.props.toy.location}
                        >
                          <option value="char">
                            Charlottenburg-Wilmersdorf
                          </option>
                          <option value="fried">
                            Friedrichshain-Kreuzberg
                          </option>
                          <option value="licht">Lichtenberg</option>
                          <option value="mar">Marzahn-Hellersdorf</option>
                          <option value="mit">Mitte</option>
                          <option value="neu">Neukölln</option>
                          <option value="pan">Pankow</option>
                          <option value="rein">Reinickendorf</option>
                          <option value="spa">Spandau</option>
                          <option value="steg">Steglitz-Zehlendorf</option>
                          <option value="tem">Tempelhof-Schöneberg</option>
                          <option value="trep">Treptow-Köpenick</option>
                        </select>
                        <label htmlFor="category">Category:</label>
                        <select
                          className="custom-select"
                          name="category"
                          defaultValue={this.props.toy.category}
                          onChange={this.handelOnChange}
                        >
                          <option value="action">Action & Adventure</option>
                          <option value="game">Games & Puzzles</option>
                          <option value="build">Build & Play sets</option>
                          <option value="doll">Dolls & Accessories</option>
                          <option value="outdoor">Outdoor</option>
                          <option value="multimedia">Multimedia</option>
                          <option value="animals">Stuffed Animals</option>
                        </select>
                        <label htmlFor="age">Age rang:</label>
                        <input
                          name="age"
                          type="range"
                          onChange={this.handelOnChange}
                          className="custom-range"
                          min="0"
                          max="4"
                          id="customRange2"
                          defaultValue={this.props.toy.age}
                        />
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
                      <div>
                        <button className="btn btn-primary" type="submit">
                          update
                        </button>
                      </div>
                    </form>
                  </ModalBody>
                </Modal>
              </div>

              <div>
                <Button color="outline-danger" onClick={this.deleteToggle}>
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
                    </Button>{" "}
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
