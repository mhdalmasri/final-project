import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import Cookies from "universal-cookie"
const cookies = new Cookies()

export default class AddToy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      newToy: {}
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  handelOnChange = e => {
    const name = e.target.name
    let value
    if (e.target.type === "radio") {
      value = e.target.id
    } else {
      value = e.target.value
    }

    this.setState(state => {
      const obj = state.newToy
      return (obj[name] = value)
    })
  }

  render() {
    const userId = cookies.get("myId");
    const url = `http://localhost:5000/api/toys/new/${userId}`
    return (
          <div>
            <Button color="outline-info"onClick={this.toggle}>Add New Toy</Button>
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
                    ></textarea>
                  </div>
                  <label htmlFor="condition">Condition:</label>
                  <br></br>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      onChange={this.handelOnChange}
                      type="radio"
                      id="great"
                      name="condition"
                      className="custom-control-input"
                      value="great"
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
                      value="good"
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
                      value="fine"
                    />
                    <label className="custom-control-label" htmlFor="fine">
                      Fine
                    </label>
                  </div>
                  <br></br>
                  <div>
                    <label htmlFor="location">Location:</label>
                    <select
                      className="custom-select"
                      name="location"
                      onChange={this.handelOnChange}
                    >
                      <option defaultValue>Select Location</option>
                      <option value="char">Charlottenburg-Wilmersdorf</option>
                      <option value="fried">Friedrichshain-Kreuzberg</option>
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
                      onChange={this.handelOnChange}
                    >
                      <option defaultValue>Select category</option>
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
                      type="range"
                      className="custom-range"
                      min="0"
                      max="4"
                      id="customRange2"
                      name="age"
                      onChange={this.handelOnChange}
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
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
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
                  <button className="btn btn-outline-primary" type="submit">
                    Add
                  </button>
                </form>
              </ModalBody>
            </Modal>
          </div>
    )
  }
}
