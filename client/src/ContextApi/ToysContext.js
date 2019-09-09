import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies

const ToysContext = React.createContext()

class ToysProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toys: [],
            currentUserToys: [],
            error: null,
            loading: false,
            alertMessage: null
        }
        this.deleteToy = this.deleteToy.bind(this)
    }

    componentDidMount() {
        const token = cookies.get("myToken");
        const userId = cookies.get("myId");
        this.setState({ loading: true, error: null, alertMessage: null })
        axios(`http://localhost:5000/api/toys/all`, { headers: { token, userId } })
            .then(resp => {
                this.setState({
                    toys: resp.data,
                    loading: false,
                    currentUserToys: resp.data.filter(toy => {
                        if (toy.userID === userId) {
                            return toy
                        }
                    })
                })
            })
            .catch(error => this.setState({
                error,
                loading: false
            }))
    }


    async deleteToy(toyId) {
        const token = cookies.get("myToken")
        const userId = cookies.get("myId")
        this.setState({ loading: true, error: null })
        await axios.delete(`http://localhost:5000/api/toys/del/${toyId}`, { headers: { token, userId } }).then(resp => {
            this.setState({
                loading: false,
                toys: this.state.toys.filter(toy => {
                    if(toy._id !== toyId) return toy
                }),
                currentUserToys: this.state.currentUserToys.filter(toy => {
                    if(toy._id !== toyId) return toy
                }),
                alertMessage: resp.data
            })
        }).catch(error => this.setState({
            error,
            loading: false
        }))
    }


    render() {
        console.log(this.state.toys)
        return (
            <ToysContext.Provider value={{
                ...this.state,
                deleteToy: this.deleteToy
            }} > {this.props.children} </ToysContext.Provider>
        )
    }

}

export { ToysProvider, ToysContext }