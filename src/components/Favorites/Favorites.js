import ShowCard from "../ShowCard/ShowCard";
import { Link } from "react-router-dom";
import NoFavorites from "../NoFavorites/NoFavorites";
import Loading from "../Loading/Loading.js";
import React from "react";
import "./Favorites.scss";

const Favorites = ({ favoriteMovies, favoriteTvs, loading }) => {
  const favoriteMovie = favoriteMovies.results.map((movie) => {
    return (
      <Link to={`/movie/${movie.id}`} key={`tv-${movie.id}`}>
        <ShowCard {...movie} key={movie.id} media_type="movie" />
      </Link>
    );
  });

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
