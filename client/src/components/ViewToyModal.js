import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import logo from "../img/images.jpeg";

export default class ViewToyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        {this.props.status === "swap" ? (
          <Button onClick={this.toggle}>Swap</Button>
        ) : (
          <Button onClick={this.toggle}>Get</Button>
        )}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
            <div className="d-flex justify-content-around">
              <img className="m-2" src={logo} alt="..." />
            </div>
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
                <tr>
                  <th scope="row">Added By:</th>
                  <td>{this.props.toyId}</td>
                </tr>
                <tr>
                  <th scope="row">Status:</th>
                  <td>
                    {" "}
                    {this.props.status === "swap" ? (
                      <span className="badge badge-pill badge-success">
                        to Swap
                      </span>
                    ) : (
                      <span className="badge badge-pill badge-danger">
                        to Give
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-around">
            <Button>Request</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
