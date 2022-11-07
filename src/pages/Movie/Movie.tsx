import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardList from "../../components/CardList/CardList"
import Pagination from "../../components/Pagination"
import Searchbar from "../../components/Searchbar/Searchbar"
import { getPopularMoviesSelector } from "../../redux/popular/popular-selectors"
import { popularMoviesThunk } from "../../redux/popular/popular-thunk"
import { AppDispatch } from "../../redux/store"
import { fetchPopularMovies } from "../../services/moviesAPI"
import "./Movie.scss"

const Movie = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const fetchData = useCallback(
    (page: number) => async () => {
      setLoading(true)
      const response = await fetchPopularMovies(page)
      dispatch(popularMoviesThunk(response.data))
      console.log(response)
      setLoading(false)
    },
    [dispatch]
  )
  useEffect(() => {
    fetchData(page)
  }, [page, fetchData])

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number> = 1) =>
    setPage(pageNumber)
  const moviesList = useSelector(getPopularMoviesSelector)

  if (loading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  }
  return (
    <div className="home-container">
      <h1>Popular Movies</h1>
      <Searchbar />
      <Pagination
        moviesPerPage={20}
        totalPages={15}
        paginate={paginate}
        currentPage={page}
      />
      <CardList list={moviesList.results} />
      <div>
        <b>Current Page:</b>
        <span>{page}</span>
      </div>
    </div>
  )
}

export default Movie
