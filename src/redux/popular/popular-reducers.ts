import { createReducer } from "@reduxjs/toolkit"
import { PaginatedMovie } from "../../models/paginatedMovie.model"
import { popularMoviesThunk } from "./popular-thunk"

export interface PopularMoviesState {
  status: "idle" | "loading" | "failed"
  value: PaginatedMovie
}

const initialState: PopularMoviesState = {
  status: "idle",
  value: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
}

export const popularMovies = createReducer(initialState, (builder) => {
  builder
    .addCase(popularMoviesThunk.pending, (state) => {
      state.status = "loading"
    })
    .addCase(popularMoviesThunk.fulfilled, (state, action) => {
      state.status = "idle"
      console.log(action.payload)
      state.value = Object.assign(state.value, action.payload)
    })
    .addDefaultCase((state, action) => {})
})
