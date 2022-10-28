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
  const [loading, setLoading] = useState(false)
  const fetchData = async (page: number) => {
    setLoading(true)
    const response = await fetchPopularMovies(page)
    setData(response.data)
    dispatch(addPopular(response.data))
    console.log(response)
    setLoading(false)
  }
  const popular = useSelector(getPopularMoviesSelector);
  useEffect(()=> {
    fetchData(page)
  },[page])

  if(loading){
    return <div><h1>Loading ...</h1></div>
  }
  return (
    <div>works
      <div>
        {popular.page}
      </div>
      <div>
        {popular && popular.results.map(movie => <div>{movie.title}</div>)}
      </div>
      
    </div>
  );
};

export default Home;
