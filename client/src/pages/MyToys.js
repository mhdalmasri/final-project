import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


export default class MyToys extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MyToys: []
        }
        this.fetchMyToys()
    }

    fetchMyToys() {
        axios.get('http://localhost:5000/api/toys/my').then(resp => this.setState({
            MyToys: resp.data
        }))
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="d-flex flex-wrap justify-content-around" >
                    {this.state.MyToys.map((toy, index) => {
                        return (
                            <div key={index} className="card col-xl-3 m-5 p-0">
                                <img src={toy.url} className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{toy.toyName}</h5>
                                    <p className="card-text">{toy.description}</p>

                                </div>
                                <a href="#" className="btn hoverBtn" >Interested</a>
                                <a href="#" className="btn hoverBtn" >Interested</a>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }

}