import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import ToyThumb from "../components/ToyThumb";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: [],
      filterToys: [],
      locationToys: [],
      ageToys: [],
      categoryToys: [],
      conditionToys: []
    };
    this.address = React.createRef();
    this.age = React.createRef();
    this.category = React.createRef();
    this.condition = React.createRef();
    this.status = React.createRef();
  }
  componentDidMount() {
    const cookies = new Cookies();
    const token = cookies.get("myToken");
    const userId = cookies.get("myId");
    axios
      .get(`http://localhost:5000/api/toys/all`, { headers: { token, userId } })
      .then(resp =>
        this.setState({
          toys: resp.data,
          filterToys: resp.data
        })
      );
  }

  filter() {
    const selectedLocation = this.address.current.value;
    const selectedAge = this.age.current.value;
    const selectedCondition = this.condition.current.value;
    const selectedCategory = this.category.current.value;

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

  filterByStatus() {
    if (this.status.current.value === "all") {
      return this.filter();
    }
    if (this.status.current.value === "get") {
      this.filter();
      if (this.state.filterToys.length === this.state.toys.length) {
        this.setState({
          filterToys: this.state.toys.filter(toy => {
            if (toy.status === "get") {
              return toy;
            }
          })
        });
      } else {
        this.setState({
          filterToys: this.state.filterToys.filter(toy => {
            if (toy.status === "get") {
              return toy;
            }
          })
        });
      }
    }
    if (this.status.current.value === "swap") {
      this.filter();
      if (this.state.filterToys.length === this.state.toys.length) {
        this.setState({
          filterToys: this.state.toys.filter(toy => {
            if (toy.status === "swap") {
              return toy;
            }
          })
        });
      } else {
        this.setState({
          filterToys: this.state.filterToys.filter(toy => {
            if (toy.status === "swap") {
              return toy;
            }
          })
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar data={this.state.filterToys} />
        <div className="mt-3 d-flex border-bottom pb-2">
          <div className="d-flex justify-content-between col-9">
            <div className="input-group m-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="location">
                  Location
                </label>
              </div>
              <select
                className="custom-select"
                id="location"
                onChange={() => this.filter()}
                ref={this.address}
              >
                <option value="all" defaultValue>
                  All ..
                </option>
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

            <div className="input-group  m-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="age">
                  Age
                </label>
              </div>
              <select
                className="custom-select"
                id="age"
                ref={this.age}
                onChange={() => this.filter()}
              >
                <option value="all" defaultValue>
                  All ..
                </option>
                <option value="0">1 - 3</option>
                <option value="1">3 - 6</option>
                <option value="2">6 - 9</option>
                <option value="3">9 - 13</option>
                <option value="4">13 - 17</option>
              </select>
            </div>

            <div className="input-group  m-1">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Category
                </label>
              </div>
              <select
                className="custom-select"
                ref={this.category}
                id="inputGroupSelect01"
                onChange={() => this.filter()}
              >
                <option value="all" defaultValue>
                  All ..
                </option>
                <option value="action">Action & Adventure</option>
                <option value="game">Games & Puzzles</option>
                <option value="build">Build & Play sets</option>
                <option value="doll">Dolls & Accessories</option>
                <option value="outdoor">Outdoor</option>
                <option value="multimedia">Multimedia</option>
                <option value="animals">Stuffed Animals</option>
              </select>
            </div>

            <div className="input-group m-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="condition">
                  Condition
                </label>
              </div>
              <select
                className="custom-select"
                ref={this.condition}
                id="condition"
                onChange={() => this.filter()}
              >
                <option value="all" defaultValue>
                  All ..
                </option>
                <option value="great">Great</option>
                <option value="good">Good</option>
                <option value="fine">Fine</option>
              </select>
            </div>
            <div className="input-group m-1">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="status">
                  Status
                </label>
              </div>
              <select
                className="custom-select"
                ref={this.status}
                id="status"
                onChange={e => this.filterByStatus(e)}
              >
                <option value="all" defaultValue>
                  All ..
                </option>
                <option value="get">Get</option>
                <option value="swap">Swap</option>
              </select>
            </div>
          </div>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Toy . ."
              aria-label="Search"
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="button">
              Search
            </button>
          </form>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          {this.state.filterToys.length !== 0 ? (
            this.state.filterToys.map((toy, index) => {
              return (
                <div key={index}>
                  <ToyThumb
                    toyId={toy._id}
                    name={toy.toyName}
                    description={toy.description}
                    condition={toy.condition}
                    age={toy.age}
                    location={toy.location}
                    status={toy.status}
                    category={toy.category}
                  />
                </div>
              );
            })
          ) : (
            <div className="mt-5 bold"> No results are found, Sorry 😞 </div>
          )}
        </div>
      </div>
    );
  }
}
