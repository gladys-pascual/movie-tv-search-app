import React, { Component } from "react";
import Loading from "./Loading";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          movie: response,
          loading: false,
        });
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    console.log(this.state.movie);
    return (
      <>
        <p>Movie component</p>
      </>
    );
  }
}

export default Movie;
