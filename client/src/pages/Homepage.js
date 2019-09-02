import React, { Component } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'


export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toys: [],
            filterToys: [],
            locationToys: [],
            ageToys: [],
            categoryToys: [],
            conditionToys: []
        }
        this.address = React.createRef()
        this.age = React.createRef()
        this.category = React.createRef()
        this.condition = React.createRef()
        this.getCheck = React.createRef()
        this.swapCheck = React.createRef()
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/toys/all').then(resp => this.setState({
            toys: resp.data,
            filterToys: resp.data
        }))
    }

    filter() {

        const selectedLocation = this.address.current.value
        const selectedAge = this.age.current.value
        const selectedCondition = this.condition.current.value
        const selectedCategory = this.category.current.value



        console.log("stats cleared", "location" + this.state.locationToys, "age" + this.state.ageToys, "category" + this.state.categoryToys, "condition" + this.state.conditionToys)

        if (selectedLocation === "all" && selectedAge === "all" && selectedCategory === "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys
            })
        } else if (selectedLocation !== "all" && selectedAge === "all" && selectedCategory === "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge !== "all" && selectedCategory === "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge === "all" && selectedCategory !== "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.category === selectedCategory) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge === "all" && selectedCategory === "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation !== "all" && selectedAge !== "all" && selectedCategory === "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.age === selectedAge) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation !== "all" && selectedAge === "all" && selectedCategory !== "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.category === selectedCategory) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation !== "all" && selectedAge === "all" && selectedCategory === "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge !== "all" && selectedCategory !== "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge && toy.category === selectedCategory) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge !== "all" && selectedCategory === "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge === "all" && selectedCategory !== "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.category === selectedCategory && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation !== "all" && selectedAge !== "all" && selectedCategory !== "all" && selectedCondition === "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.age === selectedAge && toy.category === selectedCategory) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation !== "all" && selectedAge !== "all" && selectedCategory === "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.age === selectedAge && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation !== "all" && selectedAge === "all" && selectedCategory !== "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.category === selectedCategory && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else if (selectedLocation === "all" && selectedAge !== "all" && selectedCategory !== "all" && selectedCondition !== "all") {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge && toy.category === selectedCategory && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        } else {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.age === selectedAge && toy.category === selectedCategory && toy.condition === selectedCondition) {
                        return toy
                    }
                })
            })
        }


    }

    filterByCheck() {
        if (this.getCheck.current.checked && this.swapCheck.current.checked) {
            return this.filter()
        } else {
            if (this.getCheck.current.checked) {
                if (this.state.filterToys.length === this.state.toys.length) {
                    this.setState({
                        filterToys: this.state.toys.filter(toy => {
                            if (toy.status === "get") {
                                return toy
                            }
                        })
                    })
                } else {
                    this.setState({
                        filterToys: this.state.filterToys.filter(toy => {
                            if (toy.status === "get") {
                                return toy
                            }
                        })
                    })
                }
            } else if (this.swapCheck.current.checked) {
                if (this.state.filterToys.length === this.state.toys.length) {
                    this.setState({
                        filterToys: this.state.toys.filter(toy => {
                            if (toy.status === "swap") {
                                return toy
                            }
                        })
                    })
                } else {
                    this.setState({
                        filterToys: this.state.filterToys.filter(toy => {
                            if (toy.status === "swap") {
                                return toy
                            }
                        })
                    })
                }
            } else {
                this.filter()
            }
        }
    }

    render() {
        return (
            <>
                <Navbar data = {this.state.filterToys} />
                <div className="mt-3 d-flex border-bottom pb-2" >
                    <div className="d-flex justify-content-between col-9" >
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="location">Location</label>
                            </div>
                            <select className="custom-select" id="location" onChange={() => this.filter()} ref={this.address} >
                                <option value="all" defaultValue>All ..</option>
                                <option value="char">Charlottenburg-Wilmersdorf</option>
                                <option value="fried">Friedrichshain-Kreuzberg</option>
                                <option value="licht">Lichtenberg</option>
                                <option value="mar">Marzahn-Hellersdorf</option>
                                <option value="mit">Mitte</option>
                                <option value="neu">Neukölln</option>
                                <option value="pan">Pankow</option>
                                <option value="rein">Reinickendorf</option>
                                <option value="spa">Spandau</option>
                                <option value="steg">Steglitz-Zehlendorf</option>
                                <option value="tem">Tempelhof-Schöneberg</option>
                                <option value="trep">Treptow-Köpenick</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="age">Age</label>
                            </div>
                            <select className="custom-select" id="age" ref={this.age} onChange={() => this.filter()} >
                                <option value="all" defaultValue>All ..</option>
                                <option value="0">1 - 3</option>
                                <option value="1">3 - 6</option>
                                <option value="2">6 - 9</option>
                                <option value="3">9 - 13</option>
                                <option value="4">13 - 17</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                            </div>
                            <select className="custom-select" ref={this.category} id="inputGroupSelect01" onChange={() => this.filter()} >
                                <option value="all" defaultValue>All ..</option>
                                <option value="action">Action & Adventure</option>
                                <option value="game">Games & Puzzles</option>
                                <option value="build">Build & Play sets</option>
                                <option value="doll">Dolls & Accessories</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="multimedia">Multimedia</option>
                                <option value="animals">Stuffed Animals</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="condition">Condition</label>
                            </div>
                            <select className="custom-select" ref={this.condition} id="condition" onChange={() => this.filter()} >
                                <option value="all" defaultValue>All ..</option>
                                <option value="great">Great</option>
                                <option value="good">Good</option>
                                <option value="fine">Fine</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex col-3">
                        <div className="" >
                            <label className="checkRadio">Get<input type="checkbox" name="status" value="get" ref={this.getCheck} onClick={(e) => this.filterByCheck(e)} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="" >
                            <label className="checkRadio">Swap<input type="checkbox" name="status" value="swap" ref={this.swapCheck} onClick={(e) => this.filterByCheck(e)} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-around" >
                    <div>{this.state.filterToys.length}</div>
                    {(this.state.filterToys.length !== 0) ?
                        this.state.filterToys.map((toy, index) => {
                            let color
                            (toy.status === "swap") ? color = "#2BD0C6" : color = "#D9A728"
                            return (
                                <div key={index} className="card col-xl-3 m-5 p-0">
                                    <img src={toy.url} className="card-img-top" style={{ border: `0.5rem solid ${color}` }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{toy.toyName}</h5>
                                        <p> {toy.location} </p>
                                        <p> {toy.condition} </p>
                                        <p> {toy.age} </p>
                                        <p> {toy.category} </p>
                                    </div>
                                </div>
                            )
                        }) :
                        <div className="mt-5 bold"> No results are found, Sorry 😞 </div>
                    }
                </div>

            </>
        )
    }
}

