import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import { Link } from "react-router-dom";
import NoFavorites from "./NoFavorites";
import Loading from "./Loading";

const Favorites = (userDetails) => {
  const [favoriteMovies, setFavoriteMovies] = useState({
    results: [],
  });
  const [favoriteTvs, setFavoriteTvs] = useState({
    results: [],
  });

  const [loading, setLoading] = useState(true);

  const sessionId = localStorage.getItem("session_id");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/account/${userDetails.id}/favorite/movies?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        // setFavoriteMovies({ results: [] });
        setFavoriteMovies(response);
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }, [userDetails.id, sessionId]);

  const favoriteMovie = favoriteMovies.results.map((movie) => {
    return (
      <Link to={`/movie/${movie.id}`} key={`tv-${movie.id}`}>
        <ShowCard {...movie} key={movie.id} media_type="movie" />
      </Link>
    );
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/account/${userDetails.id}/favorite/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        // setFavoriteTvs({ results: [] });
        setFavoriteTvs(response);
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }, [userDetails.id, sessionId]);

  console.log(favoriteTvs);

  const favoriteTv = favoriteTvs.results.map((tv) => {
    return (
      <Link to={`/tv/${tv.id}`} key={`tv-${tv.id}`}>
        <ShowCard {...tv} key={tv.id} media_type="tv" />
      </Link>
    );
  });

  if (loading) {
    return <Loading />;
  }

  return !favoriteMovie.length && !favoriteTv.length ? (
    <NoFavorites />
  ) : (
    <section className="favorites">
      <h2 className="favorites-heading"> Here are your top picks: </h2>
      {favoriteMovie.length && (
        <div className="favorite-movie results">
          <h3 className="favorite-movie-heading"> Your favorite movies </h3>
          <div className="show-list">{favoriteMovie}</div>
        </div>
      )}
      {favoriteTv.length && (
        <div className="favorite-tv results">
          <h3 className="favorite-tv-heading"> Your favorite TV shows </h3>
          <div className="show-list">{favoriteTv}</div>
        </div>
      )}
    </section>
  );
};

export default Favorites;
