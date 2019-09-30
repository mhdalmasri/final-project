import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ToysContext = React.createContext()

class ToysProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allToys: [],
            toys: [],
            filterToys: [],
            currentUserToys: [],
            error: null,
            loading: false,
            alertMessage: null,
            interval: 2000
        }
        this.onDeleteToy = this.onDeleteToy.bind(this)
        this.onUpdateToy = this.onUpdateToy.bind(this)
        this.onFilter = this.onFilter.bind(this)
        this.onFilterStatus = this.onFilterStatus.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true, error: null, alertMessage: null, interval: 10000 })
        this.interval = setInterval(() => {
            const token = cookies.get("myToken");
            const userId = cookies.get("myId");
            axios(`http://localhost:5000/api/toys/all`, { headers: { token, userId } })
                .then(resp => {
                    this.setState({
                        allToys: resp.data,
                        toys: resp.data.filter(toy => {
                            if (toy.userID !== userId) {
                                return toy
                            }
                        }),
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
        }, this.state.interval)

    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onFilter(selectedLocation, selectedAge, selectedCondition, selectedCategory) {
        if (
            selectedLocation === "all" &&
            selectedAge === "all" &&
            selectedCategory === "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge === "all" &&
            selectedCategory === "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation) {
                        return toy;
                    }
                })
            })
        } else if (
            selectedLocation === "all" &&
            selectedAge !== "all" &&
            selectedCategory === "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation === "all" &&
            selectedAge === "all" &&
            selectedCategory !== "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.category === selectedCategory) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation === "all" &&
            selectedAge === "all" &&
            selectedCategory === "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.condition === selectedCondition) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge !== "all" &&
            selectedCategory === "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.location === selectedLocation && toy.age === selectedAge) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge === "all" &&
            selectedCategory !== "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.location === selectedLocation &&
                        toy.category === selectedCategory
                    ) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge === "all" &&
            selectedCategory === "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.location === selectedLocation &&
                        toy.condition === selectedCondition
                    ) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation === "all" &&
            selectedAge !== "all" &&
            selectedCategory !== "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge && toy.category === selectedCategory) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation === "all" &&
            selectedAge !== "all" &&
            selectedCategory === "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (toy.age === selectedAge && toy.condition === selectedCondition) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation === "all" &&
            selectedAge === "all" &&
            selectedCategory !== "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.category === selectedCategory &&
                        toy.condition === selectedCondition
                    ) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge !== "all" &&
            selectedCategory !== "all" &&
            selectedCondition === "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.location === selectedLocation &&
                        toy.age === selectedAge &&
                        toy.category === selectedCategory
                    ) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge !== "all" &&
            selectedCategory === "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.location === selectedLocation &&
                        toy.age === selectedAge &&
                        toy.condition === selectedCondition
                    ) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation !== "all" &&
            selectedAge === "all" &&
            selectedCategory !== "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.location === selectedLocation &&
                        toy.category === selectedCategory &&
                        toy.condition === selectedCondition
                    ) {
                        return toy;
                    }
                })
            });
        } else if (
            selectedLocation === "all" &&
            selectedAge !== "all" &&
            selectedCategory !== "all" &&
            selectedCondition !== "all"
        ) {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.age === selectedAge &&
                        toy.category === selectedCategory &&
                        toy.condition === selectedCondition
                    ) {
                        return toy;
                    }
                })
            });
        } else {
            this.setState({
                filterToys: this.state.toys.filter(toy => {
                    if (
                        toy.location === selectedLocation &&
                        toy.age === selectedAge &&
                        toy.category === selectedCategory &&
                        toy.condition === selectedCondition
                    ) {
                        return toy;
                    }
                })
            });
        }
    }

    onFilterStatus(getCheck, swapCheck) {
        if (getCheck && swapCheck) {
            return this.setState({
                filterToys:this.state.toys
            })
        } else {
            if (getCheck && !swapCheck) {

                this.setState({
                    filterToys: this.state.toys.filter(toy => {
                        if (toy.status === "get") {
                            return toy
                        }
                    })
                })

            } else if (swapCheck && !getCheck) {

                this.setState({
                    filterToys: this.state.toys.filter(toy => {
                        if (toy.status === "swap") {
                            return toy
                        }
                    })
                })
            } else {
                return this.setState({
                    filterToys:this.state.toys
                })
            }
        }
    }
    async onUpdateToy(url, data) {
        this.setState({ loading: true, error: null })
        await axios({
            method: 'put',
            url: url,
            data: data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(resp => {
                this.setState({
                    loading: false
                })
                alert(resp.data) 
            }).catch(error => this.setState({
                error,
                loading: false
            }))
    }

    onSearch(value) {
        console.log(value)
        this.setState({
            filterToys: this.state.toys.filter(toy => {
                const toyName = toy.toyName.replace(/\s/g, '').toLowerCase()
                const toyDesc = toy.description.replace(/\s/g, '').toLowerCase()
                const inpValue = value.replace(/\s/g, '').toLowerCase()
                console.log(toyName, toyDesc, inpValue)
                if (toyName.includes(inpValue) || toyDesc.includes(inpValue)) {
                    return toy
                }
            })

        })
    }

    async onDeleteToy(toyId) {
        const token = cookies.get("myToken")
        const userId = cookies.get("myId")
        this.setState({ loading: true, error: null })
        await axios.delete(`http://localhost:5000/api/toys/del/${toyId}`, { headers: { token, userId } })
            .then(resp => {
                this.setState({
                    loading: false,
                    toys: this.state.toys.filter(toy => {
                        if (toy._id !== toyId) return toy
                    }),
                    currentUserToys: this.state.currentUserToys.filter(toy => {
                        if (toy._id !== toyId) return toy
                    }),
                    alertMessage: resp.data
                })
            }).catch(error => this.setState({
                error,
                loading: false
            }))
    }


    render() {
        return (
            <ToysContext.Provider value={{
                ...this.state,
                onDeleteToy: this.onDeleteToy,
                onUpdateToy: this.onUpdateToy,
                onFilter: this.onFilter,
                onFilterStatus: this.onFilterStatus,
                onSearch: this.onSearch
            }} > {this.props.children} </ToysContext.Provider >
        )
    }

}

export { ToysProvider, ToysContext }