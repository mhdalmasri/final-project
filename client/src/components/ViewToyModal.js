import React from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { UserConsumer } from "../ContextApi/UserContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const userID = cookies.get("myId");
export default class ViewToyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      requestMessage: "Hi, I'm interested in your Toy ... ",
      requestModal: false
    };
    this.toggle = this.toggle.bind(this);
    this.requestToggle = this.requestToggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  requestToggle() {
    this.setState(prevState => ({
      requestModal: !prevState.requestModal
    }));
  }

  async sendNotification(toyID, receiverID, receiver, sender) {
    const message = this.state.requestMessage;
    console.log(userID);
    const url = `http://localhost:5000/api/notifications/request/${userID}`;
    const data = { toyID, receiverID, message, userID, receiver, sender };
    console.log(data);
    if (message != null) {
      await axios({
        method: "post",
        url: url,
        headers: {},
        data: data
      }).then(resp => alert(resp.data) || window.location.reload());
    } else {
      alert("message should be not empty!");
    }
    this.requestToggle();
  }

  handleOnChange = e => {
    const value = e.target.value;
    this.setState({
      requestMessage: value
    });
  };

  render() {
    return (
      <UserConsumer>
        {({ users }) => {
          let receiver = users
            .map(user => {
              if (user._id === this.props.toy.userID) {
                return user.name;
              }
            })
            .join("");
          let sender = users
            .map(user => {
              if (user._id === userID) {
                return user.name;
              }
            })
            .join("");
          return (
            <div>
              {this.props.toy.status === "swap" ? (
                <Button color="outline-secondary btn-sm" onClick={this.toggle}>
                  Swap
                </Button>
              ) : (
                <Button color="outline-secondary btn-sm" onClick={this.toggle}>
                  Get
                </Button>
              )}

              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.toy.className}
              >
                <ModalHeader className="text-capitalize" toggle={this.toggle}>
                  {this.props.toy.toyName}
                </ModalHeader>
                <ModalBody>
                  <div className="d-flex justify-content-around">
                    <img className="m-2 w-100" src={this.props.toy.url} alt="..." />
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
                        <td className="text-capitalize">{receiver}</td>
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
                  <div>
                    <Button
                      color="outline-info btn-sm"
                      onClick={this.requestToggle}
                    >
                      Request
                    </Button>
                    <Modal
                      isOpen={this.state.requestModal}
                      toggle={this.requestToggle}
                      className={this.props.className}
                    >
                      <ModalHeader toggle={this.requestToggle}>
                        Send Request
                      </ModalHeader>
                      <ModalBody>
                        <textarea
                          onChange={e => this.handleOnChange(e)}
                          value={this.state.requestMessage}
                          className="form-control"
                          aria-label="With textarea"
                        ></textarea>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          name={this.props.toy._id}
                          color="outline-success btn-sm"
                          onClick={() =>
                            this.sendNotification(
                              this.props.toy._id,
                              this.props.toy.userID,
                              receiver,
                              sender
                            )
                          }
                        >
                          Send
                        </Button>{" "}
                        <Button
                          color="outline-info btn-sm"
                          onClick={this.requestToggle}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </ModalFooter>
              </Modal>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
