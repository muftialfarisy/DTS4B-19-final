import React from "react";
import TopList from "../containers/TopList";
import TopListMovies from "../containers/TopListMovies";
import Top from "./Top";
import Top2 from "./Top2";
import "../Home.css";
const Home = () => {
  return (
    <div className="home">
      <Top2 />
      <TopList />
      {/* <TopListMovies /> */}
    </div>
  );
};

export default Home;
