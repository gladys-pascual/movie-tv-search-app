import React, { Component } from "react";
import Loading from "./Loading";
import Show from "./Show";

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

  componentDidUpdate() {
    document.title = `${this.state.movie.title}`;
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const {
      title,
      genres,
      poster_path,
      overview,
      release_date,
      runtime,
      vote_average,
      tagline,
    } = this.state.movie;

    return (
      <>
        <Show
          title={title}
          genres={genres}
          poster={poster_path}
          overview={overview}
          date={release_date}
          runtime={runtime}
          vote={vote_average}
          tagline={tagline}
          movie={true}
        />
      </>
    );
  }
}

export default Movie;
