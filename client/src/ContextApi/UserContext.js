import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies

const { Provider, Consumer } = React.createContext()

class UserProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
            users: []
        }
    }
    componentDidMount() {
        const token = cookies.get("myToken")
        if (token) {
            this.handleLogin()
        }
    }

    handleLogin = () => {
        const token = cookies.get("myToken")
        const userId = cookies.get("myId")
        axios.get("http://localhost:5000/api/users/all", { headers: { token, userId } })
            .then(resp => this.setState({
                users: resp.data,
                currentUser: resp.data.filter(user => user._id === userId)
            }))
    }
    handleLogout = () => {
        this.setState({ currentUser: null, users : null })
    }

    render() {
        console.log(this.state)
        return (
            <Provider value={{
                user: this.state.currentUser,
                users: this.state.users,
                onLogin: this.handleLogin,
                onLogout: this.handleLogout
            }} > {this.props.children} </Provider>
        )
    }
}

export { UserProvider, Consumer as UserConsumer }