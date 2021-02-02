import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <PacmanLoader color="#7bcbc4" size="60px" />
    </div>
  );
};

export default Loading;
