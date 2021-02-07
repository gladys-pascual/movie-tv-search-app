import React, { Component } from "react";
import history from "../../history";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchText !== "") {
      history.push(`/search?query=${this.state.searchText}`);
    }
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <div className="form-wrapper">
          <input
            className="input"
            type="text"
            name="query"
            onChange={this.onSearchChange}
            placeholder="Search for a movie or tv show..."
          ></input>
          <button type="submit" id="submit" className="search-button">
            <p>Search</p>
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
