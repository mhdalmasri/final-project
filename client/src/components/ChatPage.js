import React, { Component } from "react";
import { NotificationsConsumer } from "../ContextApi/NotificationsContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ToyThumb from "./ToyThumb";
import axios from 'axios'
import Cookies from 'universal-cookie'
import { ToysContext } from "../ContextApi/ToysContext";


const cookies = new Cookies
const userId = cookies.get("myId")


class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      id: "",
      modal: false
    }
    this.getID = this.getID.bind(this)
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleOnChange = (e) => {
    const value = e.target.value
    this.setState({
      message: value
    })

  }
  async getID(e, id, sender, username) {
    console.log("get id is called")
    this.setState({
      id: id
    })
    console.log(this.state.id)
    const url = `http://localhost:5000/api/notifications/messages/clicked/${id}`
    if (sender !== username) {
      await axios({
        method: 'put',
        url: url,
        headers: {}
      }).then(resp => console.log(resp.data))
        .catch(error => console.log(error))
    }
  }

  sendMessage(e, OnSendMessage) {

    e.preventDefault()
    const username = e.target.name
    const id = this.state.id
    const message = this.state.message
    console.log(id, message, username)

    OnSendMessage(id, message, username)
    this.setState({
      message: ""
    })
  }

  deleteRequest(e, OnDeleteRequest) {
    const noteID = e.target.name

    OnDeleteRequest(noteID)
  }

  render() {
    const username = this.props.users.map(user => {
      if (user._id === userId) {
        return user.name
      }
    }).join("")
    return (
      <ToysContext.Consumer>
        {({ toys }) => (
          <NotificationsConsumer>
            {({ sentNotifications, receivedNotifications, allNotifications, OnSendMessage, OnDeleteRequest }) => (
              <div className="card chat-room" >
                <h1 className="text-center text-uppercase text-light chatFrame">chat</h1>
                <div className="d-flex justify-content-center">
                  <div className="chatFrame z-depth-1 scrollbar-light-blue members-panel-1">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                      {sentNotifications ? (
                        sentNotifications.sort(function (a, b) {
                          return new Date(b.date) - new Date(a.date);
                        }).map(note => (
                          <a
                            key={note._id}
                            onClick={(e) => this.getID(e, note._id, note.messages[note.messages.length - 1].sender, username)}
                            className="d-flex toHide position-relative justify-content-between align-items-center nav-link" id={`v-pills-${note._id}-tab`} data-toggle="pill" href={`#v-pills-${note._id}`} role="tab" aria-controls={`v-pills-${note._id}`} aria-selected="false">

                            <img src={toys.map(toy => {
                              if (toy._id === note.toyID) {
                                return toy.url
                              }
                            }).join("")} alt="avatar" className="avatar align-self-center rounded-circle mr-1 z-depth-1" />
                            <div className="text-small w-75">
                              <strong className="text-white" >{note.receiver}</strong>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="last-message text-white text-muted">{note.messages[note.messages.length - 1].text}</p>
                                <span className="float-right" >
                                  {(note.clicked && note.messages[note.messages.length - 1].sender === username) ? <>
                                    <i className="fas fa-check text-small"></i>
                                    <i className="fas fa-check text-small"></i>
                                  </>
                                    : (note.clicked && note.messages[note.messages.length - 1].sender !== username) ? <i className="fas fa-eye"></i>
                                      : (!note.clicked && note.messages[note.messages.length - 1].sender === username) ? <i className="fas fa-check text-small"></i> : <i className="fas fa-circle text-danger"></i>}
                                </span>
                              </div>
                            </div>
                          </a>

                        ))
                      ) : (<div className="p-2"> No sent requests </div>)
                      }
                      {receivedNotifications ? (
                        receivedNotifications.sort(function (a, b) {
                          return new Date(b.date) - new Date(a.date);
                        }).map(note => (
                          <a
                            key={note._id}
                            onClick={(e) => this.getID(e, note._id, "clicked")}
                            className="d-flex toHide position-relative justify-content-between align-items-center nav-link" id={`v-pills-${note._id}-tab`} data-toggle="pill" href={`#v-pills-${note._id}`} role="tab" aria-controls={`v-pills-${note._id}`} aria-selected="false">
                            <img src={toys.map(toy => {
                              if (toy._id === note.toyID) {
                                return toy.url
                              }
                            }).join("")} alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-1 z-depth-1" />
                            <div className="text-small w-75">
                              <strong className="text-white" >{note.sender}</strong>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="last-message text-muted">{note.messages[note.messages.length - 1].text}</p>
                                <span className="float-right" >{(note.clicked && note.messages[note.messages.length - 1].sender === username) ? <>
                                  <i className="fas fa-check text-small"></i>
                                  <i className="fas fa-check text-small"></i>
                                </>
                                  : (note.clicked && note.messages[note.messages.length - 1].sender !== username) ? <i className="fas fa-eye"></i>
                                    : (!note.clicked && note.messages[note.messages.length - 1].sender === username) ? <i className="fas fa-check text-small"></i> : <i className="fas fa-circle text-danger"></i>}</span>
                              </div>

                            </div>
                          </a>
                        ))
                      ) : (<div className="p-2"> No received requests </div>)
                      }

                    </div>
                  </div>
                  <div className="position-relative" style={{ padding: "0" }} >
                    <div className="tab-content chat-1 scrollbar-light-blue" id="v-pills-tabContent">
                      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">animation</div>
                      {allNotifications ? (
                        allNotifications.map((note, index) => (
                          <div key={index} className="tab-pane fade mb-5" id={`v-pills-${note._id}`} role="tabpanel" aria-labelledby={`v-pills-${note._id}-tab`}>
                             <div className="chatTab" >
                              
                              <div>
                <Button
                  className="text-primary"
                  color="btn"
                  onClick={this.toggle}
                >
                  <h3>{note.sender === username ? note.receiver : note.sender}</h3>
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>
                  {note.sender === username ? note.receiver : note.sender}'s Toys
                  </ModalHeader>
                  <ModalBody className="modalUserToys" >
                  {note.sender === username ? toys.map(toy => {
                    if (toy.userID === note.receiverID ) {
                      return <ToyThumb toy={toy} route="MainPage" />
                    }
                  }) : toys.map(toy => {
                    if (toy.userID === note.senderID) {
                      return <ToyThumb toy={toy} route="MainPage" />
                    }
                  })}
                  </ModalBody>
                  <ModalFooter>
                    
                  </ModalFooter>
                </Modal>
              </div>

                            <button name={note._id} onClick={(e) => this.deleteRequest(e, OnDeleteRequest)} type="button" className=" deleteChatBtn">
                            <i className="far fa-trash-alt"></i>
                            </button>
                            </div> 
                            <div className="d-flex justify-content-between flex-column mb-4 " >
                              {note.messages.map(message =>
                                (message.sender === username) ?
                                  <div key={message._id} className="chat-body bg-white rounded border align-self-end w-75 white p-1 m-2 z-depth-1">
                                    <div className="header  mt-4">
                                      <strong className="primary-font ">Me</strong>
                                      <small className="pull-right  text-muted"><i className="far fa-clock"></i> {message.date} </small>
                                    </div>
                                    <hr className="w-100" />
                                    <p className="my-0">{message.text}</p>
                                  </div> :
                                  <div key={message._id} className="chat-body bgReceivedMessage rounded align-self-start w-75 text-white p-1 m-2 z-depth-1">
                                    <div className="header">
                                      <strong className="primary-font ">{message.sender}</strong>
                                      <small className="pull-right text-muted"><i className="far fa-clock"></i> {message.date} </small>

                                    </div>
                                    <hr className="w-100" />
                                    <p className="mb-0">{message.text}</p>
                                  </div>
                              )}
                            </div>

                            <form className="messenger" name={username} onSubmit={(e) => this.sendMessage(e, OnSendMessage)} >
                              <div className="message-input">
                                <div className="wrap">
                                  <input
                                    value={this.state.message}
                                    onChange={this.handleOnChange}
                                    type="text" placeholder="Write your message..." />

                                  <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        ))
                      ) : (<div>no notes</div>)
                      }
                    </div>
                  </div>
                </div>
              </div>)
            }
          </NotificationsConsumer>

        )}
      </ToysContext.Consumer>
    )
  }
}





export default ChatPage;