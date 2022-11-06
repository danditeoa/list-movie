import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMovie from "../../components/cardMovie/CardMovie";
import Pagination from "../../components/Pagination";
import { addPopular } from "../../redux/popular/popular-actions";
import { getPopularMoviesSelector } from "../../redux/popular/popular-selectors";
import { fetchPopularMovies } from "../../services/moviesAPI";
import "./Movie.scss";

const Movie = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = popular.results.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);
  let PageSize = 5;

  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const key = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return popular.results.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  if(loading){
    return <div><h1>Loading ...</h1></div>
  }
  return (
    <div>works
       <div>
        {popular.page}
      </div>
      <div>
        {currentListData.map(movie =><CardMovie movie={movie} />)}
      </div> 
      <div className="mt-5 mb-3">
        <b>Current Page:</b><span className="ml-2">{currentPage}</span>
      </div>
<Pagination
        postsPerPage={postsPerPage}
        totalPosts={popular.results.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Movie;
