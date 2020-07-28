import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    // <section className="loading">
    //   <span className="material-icons">hourglass_bottom</span>
    //   <h3>Loading...</h3>
    // </section>

    <div className="loading">
      <PacmanLoader color="#7bcbc4" size="100" />
    </div>
  );
};

export default Loading;
