import React, { useEffect } from "react";
import Search from "./Search";

const Home = () => {
  useEffect(() => {
    document.title = `Search App`;
  }, []);

  return (
    <>
      <Search />
    </>
  );
};

export default Home;
