import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default class AddToy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newToy: {}
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handelOnChange = e => {
    const name = e.target.name;
    let value;
    if (e.target.type === "radio") {
      value = e.target.id;
    } else {
      value = e.target.value;
    }

    this.setState(state => {
      const obj = state.newToy;
      return (obj[name] = value);
    });
  };

  render() {
    const userId = cookies.get("myId");
    const url = `http://localhost:5000/api/toys/new/${userId}`;
    return (
      <div>
        <Button color="outline-success btn-sm" onClick={this.toggle}>
          Add
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add New Toy</ModalHeader>
          <ModalBody>
            <form method="POST" action={url} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name:</label>
                <input
                  onChange={this.handelOnChange}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter name"
                  name="toyName"
                  autoFocus
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Description:
                </label>
                <textarea
                  onChange={this.handelOnChange}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="describe your toy"
                  name="description"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="condition">Condition:</label>
                <br></br>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onChange={this.handelOnChange}
                    type="radio"
                    id="great"
                    name="condition"
                    className="custom-control-input"
                    value="Great"
                    
                  />
                  <label className="custom-control-label" htmlFor="great">
                    Great
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onChange={this.handelOnChange}
                    type="radio"
                    id="good"
                    name="condition"
                    className="custom-control-input"
                    value="Good"
                    
                  />
                  <label className="custom-control-label" htmlFor="good">
                    Good
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onChange={this.handelOnChange}
                    type="radio"
                    id="fine"
                    name="condition"
                    className="custom-control-input"
                    value="Fine"
                    
                  />
                  <label className="custom-control-label" htmlFor="fine">
                    Fine
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <select
                  className="custom-select"
                  name="location"
                  onChange={this.handelOnChange}
                >
                  <option defaultValue>Select Location</option>
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
                  <option value="Steglitz">Steglitz-Zehlendorf</option>
                  <option value="Tempelhof-Schöneberg">
                    Tempelhof-Schöneberg
                  </option>
                  <option value="Treptow-Köpenick">Treptow-Köpenick</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  className="custom-select"
                  name="category"
                  onChange={this.handelOnChange}
                >
                  <option defaultValue>Select category</option>
                  <option value="Action & Adventure">Action & Adventure</option>
                  <option value="Games & Puzzles">Games & Puzzles</option>
                  <option value="Build & Play sets">Build & Play sets</option>
                  <option value="Dolls & Accessories">
                    Dolls & Accessories
                  </option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Multimedia">Multimedia</option>
                  <option value="Stuffed Animals">Stuffed Animals</option>
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
                    id="customFile1"
                    name="url"
                  />
                  <label className="custom-file-label" htmlFor="customFile1">
                    Choose file
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <br></br>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onChange={this.handelOnChange}
                    type="radio"
                    id="swap"
                    name="status"
                    className="custom-control-input"
                    value="swap"
                  />
                  <label className="custom-control-label" htmlFor="swap">
                    To Swap
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    onChange={this.handelOnChange}
                    type="radio"
                    id="get"
                    name="status"
                    className="custom-control-input"
                    value="get"
                  />
                  <label className="custom-control-label" htmlFor="get">
                    To Get
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
