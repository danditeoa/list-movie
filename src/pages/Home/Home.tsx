import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../../redux/popular/popular-actions";
import { getPopularMoviesSelector } from "../../redux/popular/popular-selectors";
import { fetchPopularMovies } from "../../services/moviesAPI";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const fetchData = async (page: number) => {
    // setLoading(true)
    const response = await fetchPopularMovies(page)
    setData(response.data)
dispatch(addPopular(response.data))
    console.log(response)
    // setLoading(false)
  }
//   const popular = useSelector(getPopularMoviesSelector);
// console.log(popular)
useEffect(()=> {
fetchData(page)
},[page])
  return (
    <div>works 
      
    </div>
  );
};

export default Home;
