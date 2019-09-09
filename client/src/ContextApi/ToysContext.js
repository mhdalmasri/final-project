import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies

const ToysContext = React.createContext()

class ToysProvider extends React.Component {

    state = {
        toys: [],
        currentUserToys: [],
        error: null,
        loading: false
    }

    componentDidMount() {
        const token = cookies.get("myToken");
        const userId = cookies.get("myId");
        this.setState({ loading: true, error: null })
        axios(`http://localhost:5000/api/toys/all`, { headers: { token, userId } })
            .then(resp => {
                this.setState({
                    toys: resp.data,
                    loading: false,
                    currentUserToys: resp.data.filter(toy => {
                        if(toy.userID === userId){
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



    render() {
        console.log(this.state.toys)
        return (
            <ToysContext.Provider value={{
                ...this.state
            }} > {this.props.children} </ToysContext.Provider>
        )
    }

}

export { ToysProvider, ToysContext}