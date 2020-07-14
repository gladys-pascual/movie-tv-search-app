import React from "react";

const ShowItem = () => {
  return (
    <section className="show-item">
      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/{poster_path}`}
        alt={media_type === "tv" ? name : title}
      />
    </section>
  );
};

export default ShowItem;
