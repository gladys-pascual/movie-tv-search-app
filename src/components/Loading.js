import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="loading">
      <PacmanLoader color="#7bcbc4" size="100px" />
    </div>
  );
};

export default Loading;
