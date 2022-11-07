import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchPopularMovies } from "../../services/moviesAPI"

export const popularMoviesThunk = createAsyncThunk(
  "search/movie",
  async (page: number) => {
    const results = (await fetchPopularMovies(page)).data
    return results
  }
)
