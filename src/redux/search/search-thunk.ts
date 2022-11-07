import { createAsyncThunk } from "@reduxjs/toolkit"
import { searchMovies } from "../../services/moviesAPI"

export const searchThunk = createAsyncThunk(
  "search/movie",
  async (movieTitle: string) => {
    const results = (await searchMovies(movieTitle)).data
    // The value we return becomes the `fulfilled` action payload
    return results
  }
)
