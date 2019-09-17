import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NotificationsConsumer } from '../ContextApi/NotificationsContext';
import { UserConsumer } from '../ContextApi/UserContext';


export default class Notifications extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <NotificationsConsumer>
                {({ sentNotifications, receivedNotifications }) =>
                    <div className="mt-5 col-8 d-flex">
                        <div className="col-xl-3 ">
                            {sentNotifications ? (
                                sentNotifications.map(note => <Preview
                                key={note._id}
                                status="sent" note={note} />)
                            ) : (<div> No sent requests </div>)
                            }
                        </div>
                        <div className="col-xl-3 ">
                            {receivedNotifications ? (
                                receivedNotifications.map(note => <Preview
                                    key={note._id} status="received" note={note} />)
                            ) : (<div> No received requests </div>)
                            }
                        </div>
                    </div>
                }
            </NotificationsConsumer>
        )
    }
}


class Preview extends Component {
    constructor(props) {
        super(props)
        this.state={
            modal:false
        }
        this.toggle=this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    render() {
        return (
            <UserConsumer>
                {({ users }) =>{
                    console.log(users)
                    let username = this.props.status === "sent" ? users.map(user => {
                        if (user._id === this.props.note.senderID) {
                            return user.name
                        }
                    }) : users.map(user => {
                        if (user._id === this.props.note.receiverID) {
                            return user.name
                        }
                    })
                    return (
                    <div>
                        <Button color="outline-success" onClick={this.toggle}>
                            {(this.props.status ==="sent") ? "your request has been sent to" + username : "you've received a request from" + username }
                        </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Delete Confirmation!</ModalHeader>
                            <ModalBody> Do you want to delete ? </ModalBody>
                            <ModalFooter>
                                <Button color="outline-success" >Yes</Button>
                                <Button color="outline-primary">No</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                )}}
            </UserConsumer>

        )
    }
}