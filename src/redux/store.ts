import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { popularMovies } from "./popular/popular-reducers";

const rootReducer = combineReducers({ popularMovies });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store