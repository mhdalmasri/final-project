import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }
    submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/users/logout")
        const cookies = new Cookies();
        cookies.remove("myToken", { path: "*" })
        cookies.remove("myId", { path: "*" })
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }
    render() {
        console.log(this.props.data)
        return (
            <nav className="navbar  navbar-expand-lg navbar-light" >
                {this.renderRedirect()}
                <Link className="navbar-brand" to="/homepage" >ToySwap</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myToys">My Toys</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/requests" >Requests</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search Toy . ." aria-label="Search" />
                            <button className="btn btn-outline-info my-2 my-sm-0" type="button">Search</button>
                        </form>

                    </ul>
                    <form onSubmit={this.submitHandler} className="form-inline my-2 my-lg-0">

                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>

                    </form>
                </div>
            </nav>
        )
    }
}