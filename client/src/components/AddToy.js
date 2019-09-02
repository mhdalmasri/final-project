import React, { Component } from "react";

const tableStyle = {
  width: "100%"
};
const tdStyle = {
  width: "1%"
};
export default class AddToy extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#addToyModal"
        >
          AddToy modal
        </button>

        <div
          className="modal fade"
          id="addToyModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Add New Toy
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
                      id="range"
                    />

                    <table style={tableStyle}>
                      <tr className="d-flex justify-content-between">
                       
                        <td>00-03</td>
                        <td>03-06</td>
                        <td>06-09</td>
                        <td>09-12</td>
                        <td>12-15</td>
             
                      </tr>
                    </table>

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
                    <br></br>
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Add Toy"
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
