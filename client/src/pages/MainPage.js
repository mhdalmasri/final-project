import React from "react";
import ToyThumb from "../components/ToyThumb";
import { ToysContext } from "../ContextApi/ToysContext";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      isFilterUsed: false
    };
    this.address = React.createRef();
    this.age = React.createRef();
    this.category = React.createRef();
    this.condition = React.createRef();
    this.status = React.createRef();
    this.getCheck = React.createRef();
    this.swapCheck = React.createRef();
    this.filter = this.filter.bind(this);
  }
  componentWillUnmount() {
    this.setState({
      searchInput: null
    });
  }

  filter(onFilter) {
    const selectedLocation = this.address.current.value;
    const selectedAge = this.age.current.value;
    const selectedCondition = this.condition.current.value;
    const selectedCategory = this.category.current.value;
    this.setState({
      isFilterUsed: true
    });
    onFilter(
      selectedLocation,
      selectedAge,
      selectedCondition,
      selectedCategory
    );
  }

  filterByCheck(e, onFilterStatus) {
    this.address.current.value = "all";
    this.age.current.value = "all";
    this.condition.current.value = "all";
    this.category.current.value = "all";
    onFilterStatus(
      this.getCheck.current.checked,
      this.swapCheck.current.checked
    );
  }
  handleOnChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  search(e, onSearch) {
    onSearch(this.state.searchInput);
  }
  render() {
    return (
      <ToysContext.Consumer>
        {({ toys, filterToys, onFilter, onFilterStatus, onSearch }) => (
          <div>
            <div className="m-3  d-flex border-bottom align-items-center justify-content-between ">
              <div className="d-flex py-2 justify-content-between align-self-center">
                <select
                  className="custom-select mx-1"
                  id="location"
                  onChange={() => this.filter(onFilter)}
                  ref={this.address}
                >
                  <option value="all" defaultValue>
                    Locations ..
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

                <select
                  className="custom-select mx-1"
                  id="age"
                  ref={this.age}
                  onChange={() => this.filter(onFilter)}
                >
                  <option value="all" defaultValue>
                    Age ranges ..
                  </option>
                  <option value="0 - 3">0 - 3</option>
                  <option value="3 - 6">3 - 6</option>
                  <option value="6 - 9">6 - 9</option>
                  <option value="9 - 12">9 - 12</option>
                  <option value="12 - 15">12 - 15</option>
                </select>

                <select
                  className="custom-select mx-1"
                  ref={this.category}
                  id="inputGroupSelect01"
                  onChange={() => this.filter(onFilter)}
                >
                  <option value="all" defaultValue>
                    Categories ..
                  </option>
                  <option value="action">Action & Adventure</option>
                  <option value="game">Games & Puzzles</option>
                  <option value="build">Build & Play sets</option>
                  <option value="doll">Dolls & Accessories</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="multimedia">Multimedia</option>
                  <option value="animals">Stuffed Animals</option>
                </select>

                <select
                  className="custom-select mx-1"
                  ref={this.condition}
                  id="condition"
                  onChange={() => this.filter(onFilter)}
                >
                  <option value="all" defaultValue>
                    Status ..
                  </option>
                  <option value="great">Great</option>
                  <option value="good">Good</option>
                  <option value="fine">Fine</option>
                </select>

                <div className="input-group m-1 ">
                  <div className="d-flex">
                    <label className="checkRadio m-1">
                      Get 
                      <input
                        type="checkbox"
                        name="status"
                        value="get"
                        ref={this.getCheck}
                        onClick={e => this.filterByCheck(e, onFilterStatus)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkRadio m-1">
                      Swap
                      <input
                        type="checkbox"
                        name="status"
                        value="swap"
                        ref={this.swapCheck}
                        onClick={e => this.filterByCheck(e, onFilterStatus)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex py-2 justify-content-between align-self-center">
                <form className="form-inline ">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="searchInput"
                    placeholder="Search Toy . ."
                    aria-label="Search"
                    onChange={this.handleOnChange}
                  />
                  <button
                    className="btn btn-outline-info my-2 my-sm-0"
                    type="button"
                    onClick={e => this.search(e, onSearch)}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-around">
              {filterToys.length === 0 && !this.state.isFilterUsed ? (
                toys.map((toy, index) => (
                  <div key={index}>
                    <ToyThumb toy={toy} route="MainPage" />
                  </div>
                ))
              ) : filterToys.length !== 0 ? (
                filterToys.map((toy, index) => (
                  <div key={index}>
                    <ToyThumb toy={toy} route="MainPage" />
                  </div>
                ))
              ) : (
                <div className="mt-5 bold">
                  {" "}
                  No results are found, Sorry 😞{" "}
                </div>
              )}
            </div>
          </div>
        )}
      </ToysContext.Consumer>
    );
  }
}

export default MainPage;
