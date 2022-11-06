import { createAction } from "@reduxjs/toolkit";
import { searchMovies } from "../../services/moviesAPI";

export const requestMovie = createAction("search/request", function prepare(text: string) {
    const results = searchMovies(text).then(response=>console.log("repose e data", response.data))
    console.log({results});
    return {
      payload: {
        results,
      },
    }
  });

