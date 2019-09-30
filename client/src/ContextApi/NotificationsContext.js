
import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const { Provider, Consumer } = React.createContext();


class NotificationsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotifications: [],
      sentNotifications: [],
      receivedNotifications: []
    };
    this.OnDeleteRequest= this.OnDeleteRequest.bind(this)
  }


    componentDidMount() {
        const token = cookies.get("myToken")
        const userId = cookies.get("myId")
        const url = `http://localhost:5000/api/notifications/all`
        this.interval = setInterval(()=>{
            axios.get(url, {headers:{token, userId} } )
            .then(resp => this.setState({
                allNotifications: resp.data.filter(note => {
                    if (note.senderID === userId || note.receiverID === userId) {
                        return note
                    }
                }),
                sentNotifications: resp.data.filter(note => {
                    if (note.senderID === userId) {
                        return note
                    }
                }),
                receivedNotifications: resp.data.filter(note => {
                    if (note.receiverID === userId) {
                        return note
                    }
                })
            }))
        }, 2000) 
    }
    async OnSendMessage(id, message, username){
        const url = `http://localhost:5000/api/notifications/messages/add/${id}`
        const data = {username, message}
        await axios({
            method: 'put',
            url: url,
            data: data,
            headers: {}
        }).then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    async OnDeleteRequest(noteID){
        const url = `http://localhost:5000/api/notifications/requests/delete/${noteID}`
        await axios.delete(url).then(resp => this.setState({
            allNotifications: this.state.allNotifications.filter(note => {
                if (note._id === noteID ) {
                    return note
                }
            }),
            sentNotifications: this.state.sentNotifications.filter(note => {
                if (note._id === noteID) {
                    return note
                }
            }),
            receivedNotifications: this.state.receivedNotifications.filter(note => {
                if (note._id === noteID) {
                    return note
                }
            })
        })).catch(error => console.log(error))
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                OnSendMessage:this.OnSendMessage,
                OnDeleteRequest: this.OnDeleteRequest
            }} >
                {this.props.children}
            </Provider>
        )
    }

}

export { NotificationsProvider as default, Consumer as NotificationsConsumer };
