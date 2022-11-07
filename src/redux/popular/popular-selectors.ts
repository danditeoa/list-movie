import { RootState } from "../store"

export const getPopularMoviesSelector = (state: RootState) =>
  state.popularMovies.value

export const getPopularMoviesStatusSelector = (state: RootState) =>
  state.popularMovies.status
