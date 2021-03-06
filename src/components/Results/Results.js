import React, { Component } from "react";
import ShowCard from "../ShowCard/ShowCard";
import Search from "../Search/Search";
import NoShows from "../NoShows/NoShows";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import "./Results.scss";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loading: true,
    };
  }

  handleSearch = () => {
    const urlSearchParams = new URLSearchParams(this.props.location.search);
    this.queryValue = urlSearchParams.get("query");

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.queryValue}&include_adult=false`
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          shows: responseData.results,
          loading: false,
        });
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  };

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.handleSearch();
      document.title = `${this.queryValue}`;
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const results = this.state.shows.filter((show) => !!show.poster_path);
    let shows =
      results.length > 0 ? (
        results.map((show) => {
          return (
            <Link
              to={
                show.media_type === "tv"
                  ? `/tv/${show.id}`
                  : `/movie/${show.id}`
              }
              key={`link${show.id}`}
            >
              <ShowCard {...show} key={show.id} />
            </Link>
          );
        })
      ) : (
        <NoShows />
      );

    return (
      <>
        <Search />
        <section className="results">
          <p className={results.length > 0 ? "your-search" : "no-results"}>
            Your search results...
          </p>
          <div className="show-list">{shows}</div>
        </section>
      </>
    );
  }
}

export default Results;
