import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Heart from "react-animated-heart";

const Show = (props) => {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const day = date.getDate();
  const month_num = date.getMonth();
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
    props.updateFavorite();
    setFavorite(!favorite);
  };

  useEffect(() => {
    setFavorite(props.isFavorite);
  }, [props.isFavorite]);

  return (
    <section className="show-container">
      <div className="show">
        <div className="poster-img">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.poster}`}
            alt={props.title}
          />
        </div>

        <div className="show-details">
          <div className="title-year-heart">
            <div className="title-and-year">
              <h2 className="title"> {props.title} </h2>
              <h2 className="year">({year})</h2>
            </div>
            <div className="heart">
              <Heart isClick={favorite} onClick={onHeartClick} />
            </div>
          </div>

          <div className="info">
            <p className="genres">
              {props.genres.map((genre) => genre.name).join(", ")}
            </p>
            <span class="material-icons bullet-point">fiber_manual_record</span>
            <p>{props.runtime} min</p>
            <span class="material-icons bullet-point">fiber_manual_record</span>
            <p className="air-date">{` ${day}-${month}-${year}`}</p>
            <span className={props.movie ? "no-season" : "tv-season"}>
              <span class="material-icons bullet-point">
                fiber_manual_record
              </span>
            </span>
            <p className={props.movie ? "no-season" : "tv-season"}>
              {props.seasons} seasons
            </p>
          </div>
          <div className="rating-wrapper">
            <Rater total={5} rating={props.vote / 2} interactive={false} />
            <p className="rating">{props.vote}</p>
          </div>
          <p className="tagline">{props.tagline}</p>
          <h3>Overview:</h3>
          <p className="overview">{props.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Show;
