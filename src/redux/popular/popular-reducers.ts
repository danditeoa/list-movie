import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { addPopular } from "./popular-actions";

export const popularMovies = createReducer([{}], {
  [addPopular.type]: (state, action: PayloadAction<any>) => [...state, action.payload],
})