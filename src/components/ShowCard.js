import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ShowCard = ({
  media_type,
  name,
  title,
  poster_path,
  first_air_date,
  release_date,
  vote_average,
}) => {
  const date = new Date(media_type === "tv" ? first_air_date : release_date);
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

  return (
    <div className="show-card">
      <div className="top-wrapper">
        <div className="img-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
            alt={media_type === "tv" ? name : title}
          />
        </div>
        <div className="text-wrapper">
          <h3>{media_type === "tv" ? name : title}</h3>
          <p className="date"> {`${month} ${day} ${year}`} </p>
        </div>
      </div>

      <div className="rating-wrapper">
        <div className="icon">
          <img
            src={
              media_type === "tv"
                ? "https://img.icons8.com/android/20/000000/retro-tv.png"
                : "https://img.icons8.com/ios-filled/20/000000/movie.png"
            }
            alt={media_type === "tv" ? `tv` : `movie`}
          />
        </div>
        <p className="rating">{vote_average}</p>
        <Rater total={5} rating={vote_average / 2} interactive={false} />
      </div>
    </div>
  );
};

export default ShowCard;
