import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import Results from "./components/Results";
import { Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Tv from "./components/Tv";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search" component={Results} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/tv/:id" component={Tv} />
        </Switch>
      </>
    );
  }
}

export default App;
