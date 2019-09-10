import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ToysContext } from "../ContextApi/ToysContext";
export default class UpdateToy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      deleteModal : false
    };
    this.toggle = this.toggle.bind(this)
    this.deleteToggle = this.deleteToggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  deleteToggle(){
    this.setState(prevState => ({
      deleteModal : !prevState.deleteModal
    }))
  }

deleteToy(e, onDeleteToy){
  const toyId = e.target.name
  onDeleteToy(toyId)
  this.deleteToggle()
}
  

  render() {
    return (
      <ToysContext.Consumer>
        {({ onDeleteToy }) =>
          <div>
            <div className="d-flex justify-content-around">
              <div>
                <Button color="info" onClick={this.toggle}>Update</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>Update Toy</ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="enter name"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Description:
                </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="describe your toy"
                        ></textarea>
                      </div>
                      <label htmlFor="condition">Condition:</label>
                      <br></br>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="conditon1"
                          name="great"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="conditon1">
                          Great
                </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="conditon2"
                          name="good"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="conditon2">
                          Good
                </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="conditon3"
                          name="fine"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="conditon3">
                          Fine
                </label>
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="location">Location:</label>
                        <select className="custom-select">
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
                        <select className="custom-select">
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
                        />
                        <label htmlFor="img">Photo:</label>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                          />
                          <label className="custom-file-label" htmlFor="customFile">
                            Choose file
                  </label>
                        </div>
                        <label htmlFor="status">Status:</label>
                        <br></br>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="status1"
                            name="swap"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" htmlFor="status1">
                            To Swap
                  </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="status2"
                            name="get"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" htmlFor="status2">
                            To Get
                  </label>
                        </div>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter className="d-flex justify-content-around">
                    <Button>Update</Button>
                  </ModalFooter>
                </Modal>
              </div>

              <div>
                <Button color="danger" onClick={this.deleteToggle}>Delete</Button>
                <Modal isOpen={this.state.deleteModal} toggle={this.deleteToggle} className={this.props.className}>
                  <ModalHeader toggle={this.deleteToggle}>Delete Confirmation!</ModalHeader>
                  <ModalBody> Do you want to delete {this.props.toy.toyName}? </ModalBody>
                  <ModalFooter>
                    <Button name={this.props.toy._id} color="primary" onClick={e => this.deleteToy(e, onDeleteToy)} >Yes</Button>{' '}
                    <Button color="secondary" onClick={this.deleteToggle}>No</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>

        }
      </ToysContext.Consumer>
    );
  }
}
