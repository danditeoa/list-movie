import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { popularMovies } from "./popular/popular-reducers";
import { searchResults } from "./search/search-reducers";

const rootReducer = combineReducers({ popularMovies, searchResults });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store