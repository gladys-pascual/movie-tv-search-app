import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Tv = (props) => {
  const [tv, setTv] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => {
        setTv(response);
        setLoading(false);
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  }, [id]);

  return (
    <>
      <p>TV component</p>
    </>
  );
};

export default Tv;
