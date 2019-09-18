import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import fs from "fs";
const cookies = new Cookies();

const ToysContext = React.createContext();

class ToysProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: [],
      filterToys: [],
      currentUserToys: [],
      error: null,
      loading: false,
      alertMessage: null,
      interval: 10000
    };
    this.onDeleteToy = this.onDeleteToy.bind(this);
    this.onUpdateToy = this.onUpdateToy.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null,
      alertMessage: null,
      interval: 10000
    });
    this.interval = setInterval(() => {
      const token = cookies.get("myToken");
      const userId = cookies.get("myId");
      axios(`http://localhost:5000/api/toys/all`, {
        headers: { token, userId }
      })
        .then(resp => {
          this.setState({
            toys: resp.data,
            loading: false,
            currentUserToys: resp.data.filter(toy => {
              if (toy.userID === userId) {
                return toy;
              }
            })
          });
        })
        .catch(error =>
          this.setState({
            error,
            loading: false
          })
        );
    }, 2000);
  }

  // componentWillUnmount() {
  //     clearInterval(this.interval)
  // }

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
      });
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

  async onUpdateToy(url, data) {
    this.setState({ loading: true, error: null });
    await axios({
      method: "put",
      url: url,
      data: data,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(resp => {
        this.setState({
          loading: false
        });
        alert(resp.data) || window.location.reload();
      })
      .catch(error =>
        this.setState({
          error,
          loading: false
        })
      );
  }

  async onDeleteToy(toyId) {
    const token = cookies.get("myToken");
    const userId = cookies.get("myId");
    this.setState({ loading: true, error: null });
    await axios
      .delete(`http://localhost:5000/api/toys/del/${toyId}`, {
        headers: { token, userId }
      })
      .then(resp => {
        this.setState({
          loading: false,
          alertMessage: resp.data
        });
      })
      .catch(error =>
        this.setState({
          error,
          loading: false
        })
      );
  }

  render() {
    console.log(this.state.toys);
    return (
      <ToysContext.Provider
        value={{
          ...this.state,
          onDeleteToy: this.onDeleteToy,
          onUpdateToy: this.onUpdateToy,
          onFilter: this.onFilter
        }}
      >
        {this.props.children}
      </ToysContext.Provider>
    );
  }
}

export { ToysProvider, ToysContext };
