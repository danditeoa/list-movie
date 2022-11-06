import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination";
import { PaginatedMovie } from "../../models/paginatedMovie.model";
import { addPopular } from "../../redux/popular/popular-actions";
import { getPopularMoviesSelector } from "../../redux/popular/popular-selectors";
import { fetchPopularMovies } from "../../services/moviesAPI";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<PaginatedMovie[]>()
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

  const [moviesPerPage] = useState(1);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number> = 1) => setPage(pageNumber);
  const moviesList = useSelector(getPopularMoviesSelector);

  if(loading){
    return <div><h1>Loading ...</h1></div>
  }
  return (
    <div className="home-container">
       <div>
        {popular.page}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={popular.results.length}
        paginate={paginate}
      />
      <CardList list={moviesList.results}/>
      <div>
        <b>Current Page:</b><span>{page}</span>
      </div>
    </div>
  );
};

export default Home;
