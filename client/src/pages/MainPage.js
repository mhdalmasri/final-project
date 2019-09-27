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
    e.preventDefault();
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
                  <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
                  <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
                  <option value="Lichtenberg">Lichtenberg</option>
                  <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
                  <option value="Mitte">Mitte</option>
                  <option value="Neukölln">Neukölln</option>
                  <option value="Pankow">Pankow</option>
                  <option value="Reinickendorf">Reinickendorf</option>
                  <option value="Spandau">Spandau</option>
                  <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
                  <option value="Tempelhof-Schöneberg">Tempelhof-Schöneberg</option>
                  <option value="Treptow-Köpenick">Treptow-Köpenick</option>
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
                  <option value="Action & Adventure">Action & Adventure</option>
                  <option value="Games & Puzzles">Games & Puzzles</option>
                  <option value="Build & Play sets">Build & Play sets</option>
                  <option value="Dolls & Accessories">Dolls & Accessories</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Multimedia">Multimedia</option>
                  <option value="Stuffed Animals">Stuffed Animals</option>
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
                  <option value="Great">Great</option>
                  <option value="Good">Good</option>
                  <option value="Fine">Fine</option>
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
              <div className="d-flex py-2 justify-content-between align-self-center mb-2">
                <form className="form-inline ">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="searchInput"
                    placeholder="Specific Toy ? !"
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
            <div className="d-flex flex-wrap justify-content-start px-5">
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
