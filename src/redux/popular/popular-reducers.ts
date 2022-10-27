import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { PaginatedMovie } from "../../models/paginatedMovie.model";
import { addPopular } from "./popular-actions";

const initialState: PaginatedMovie = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
} 

export const popularMovies = createReducer(initialState, {
  [addPopular.type]: (state, action: PayloadAction<PaginatedMovie>) => Object.assign(state, action.payload),
})