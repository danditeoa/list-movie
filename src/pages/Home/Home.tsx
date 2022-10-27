import React from "react";
import { useSelector } from "react-redux";
import { getPopularMovies } from "../../redux/popular/popular-selectors";
import "./Home.scss";

const Home = () => {
  const popular = useSelector(getPopularMovies);
console.log(popular)
  return (
    <div>works</div>
  );
};

export default Home;
