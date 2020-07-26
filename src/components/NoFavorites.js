import React from "react";
import { Link } from "react-router-dom";

const NoFavorites = () => {
  return (
    <>
      <section className="no-shows">
        <span className="material-icons">sentiment_very_dissatisfied</span>
        <h3>You haven't saved your favourite movie or tv shows yet.</h3>
        <h3>
          Search your favourite movies and tv shows using the search bar in our
          {"   "}
          <Link to="/">homepage.</Link>
        </h3>
      </section>
    </>
  );
};

export default NoFavorites;
