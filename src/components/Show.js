import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Heart from "react-animated-heart";

const Show = ({
  date,
  poster,
  isFavorite,
  title,
  genres,
  runtime,
  movie,
  seasons,
  vote,
  tagline,
  overview,
  updateFavorite,
  showFavorite,
}) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month_num = newDate.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[month_num];

  const [favorite, setFavorite] = useState(false);

  const onHeartClick = () => {
    updateFavorite();
    setFavorite(!favorite);
  };

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  return (
    <section className="show-container">
      <div className="show">
        <div className="poster-img">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster}`}
            alt={title}
          />
        </div>

        <div className="show-details">
          <div className="title-year-heart">
            <div className="title-and-year">
              <h2 className="title"> {title} </h2>
              <h2 className="year">({year})</h2>
            </div>
            {showFavorite ? (
              <div className="heart">
                <Heart isClick={favorite} onClick={onHeartClick} />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="info">
            <p className="genres">
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <span className="material-icons bullet-point">
              fiber_manual_record
            </span>
            <p>{runtime} min</p>
            <span className="material-icons bullet-point">
              fiber_manual_record
            </span>
            <p className="air-date">{` ${day}-${month}-${year}`}</p>
            <span className={movie ? "no-season" : "tv-season"}>
              <span className="material-icons bullet-point">
                fiber_manual_record
              </span>
            </span>
            <p className={movie ? "no-season" : "tv-season"}>
              {seasons} seasons
            </p>
          </div>
          <div className="rating-wrapper">
            <Rater total={5} rating={vote / 2} interactive={false} />
            <p className="rating">{vote}</p>
          </div>
          <p className="tagline">{tagline}</p>
          <h3>Overview:</h3>
          <p className="overview">{overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Show;
