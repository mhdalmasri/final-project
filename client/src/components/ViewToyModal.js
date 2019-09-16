import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import logo from "../img/images.jpeg";
import { UserConsumer } from "../ContextApi/UserContext";

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
      <UserConsumer>
        {({ users }) => (
          <div>
            {this.props.toy.status === "swap" ? (
              <Button color="outline-secondary" onClick={this.toggle}>
                Swap
              </Button>
            ) : (
              <Button color="outline-secondary" onClick={this.toggle}>
                Get
              </Button>
            )}

            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.toy.className}
            >
              <ModalHeader toggle={this.toggle}>
                {this.props.toy.toyName}
              </ModalHeader>
              <ModalBody>
                <div className="d-flex justify-content-around">
                  <img className="m-2" src={this.props.toy.url} alt="..." />
                </div>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Description:</th>
                      <td>{this.props.toy.description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Age:</th>
                      <td>{this.props.toy.age}</td>
                    </tr>
                    <tr>
                      <th scope="row">Condition:</th>
                      <td>{this.props.toy.condition}</td>
                    </tr>
                    <tr>
                      <th scope="row">Location:</th>
                      <td>{this.props.toy.location}</td>
                    </tr>
                    <tr>
                      <th scope="row">Category:</th>
                      <td>{this.props.toy.category}</td>
                    </tr>
                    <tr>
                      <th scope="row">Added By:</th>
                      <td>
                        {users.map(user => {
                          if (user._id === this.props.toy.userID) {
                            return user.name;
                          }
                        })}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Status:</th>
                      <td>
                        {" "}
                        {this.props.toy.status === "swap" ? (
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
                <Button color="outline-info">Request</Button>
              </ModalFooter>
            </Modal>
          </div>
        )}
      </UserConsumer>
    );
  }
}
