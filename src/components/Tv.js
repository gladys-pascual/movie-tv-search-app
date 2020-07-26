import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Show from "./Show";

const Tv = () => {
  const [tv, setTv] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => {
        setTv(response);
        setLoading(false);
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  }, [id]);

  useEffect(() => {
    document.title = `${tv.name}`;
  }, [tv]);

  if (loading) {
    return <Loading />;
  }


  const {
    name,
    genres,
    poster_path,
    overview,
    first_air_date,
    episode_run_time,
    vote_average,
    number_of_seasons,
  } = tv;

  return (
    <>
      <Show
        title={name}
        genres={genres}
        poster={poster_path}
        overview={overview}
        date={first_air_date}
        runtime={episode_run_time}
        vote={vote_average}
        seasons={number_of_seasons}
        movie={false}
      />
    </>
  );
};

export default Tv;
