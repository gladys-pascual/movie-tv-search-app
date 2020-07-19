import React, { Component } from "react";
import "./App.scss";
import Search from "./components/Search";
import Header from "./components/Header";
import Results from "./components/Results";
import { Switch, Route } from "react-router-dom";
import history from "./history";
import Movie from "./components/Movie";
import Tv from "./components/Tv";

class App extends Component {
  handleSubmit = (searchText) => {
    history.push(`/search?query=${searchText}`);
  };

  render() {
    return (
      <>
        <Header />
        <Search handleSubmit={this.handleSubmit} />
        <Switch>
          <Route path="/search" component={Results} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/tv/:id" component={Tv} />
        </Switch>
      </>
    );
  }
}

export default App;
