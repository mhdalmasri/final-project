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
  }

  componentDidMount() {
    const token = cookies.get("myToken");
    const userId = cookies.get("myId");
    const url = `http://localhost:5000/api/notifications/all`;
    axios.get(url, { headers: { token, userId } }).then(resp =>
      this.setState({
        allNotifications: resp.data,
        sentNotifications: resp.data.filter(note => {
          if (note.userID === userId) {
            return note;
          }
        }),
        receivedNotifications: resp.data.filter(note => {
          if (note.receiverID === userId) {
            return note;
          }
        })
      })
    );
  }
  render() {
    console.log(this.state);
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { NotificationsProvider as default, Consumer as NotificationsConsumer };
