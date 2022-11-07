import { createReducer } from "@reduxjs/toolkit"
import { PaginatedMovie } from "../../models/paginatedMovie.model"
import { searchThunk } from "./search-thunk"

export interface SearchState {
  status: "idle" | "loading" | "failed"
  value: PaginatedMovie
}
const initialState: SearchState = {
  status: "idle",
  value: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
}

export const searchResults = createReducer(initialState, (builder) => {
  builder
    .addCase(searchThunk.pending, (state) => {
      state.status = "loading"
    })
    .addCase(searchThunk.fulfilled, (state, action) => {
      state.status = "idle"
      state.value = Object.assign(state.value, action.payload)
    })
    .addDefaultCase((state, action) => {})
})
