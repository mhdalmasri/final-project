import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import logo from "../img/images.jpeg";

class MyToyModal extends React.Component {
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
        <Button onClick={this.toggle}>Edit</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
            <div className="d-flex flex-column justify-content-between col-md-4">
              <img src={logo} className="card-img" alt="..." />
              <button type="button" className="btn btn-primary">
                Request
              </button>
            </div>
            <div className="col-md-8 ">
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
                  <small className="text-muted">By:Nadooo</small>
                  {this.props.status === "swap" ? (
                    <span className="badge badge-pill badge-success">
                      to Swap
                    </span>
                  ) : (
                    <span className="badge badge-pill badge-danger">
                      to Give
                    </span>
                  )}
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modale;
