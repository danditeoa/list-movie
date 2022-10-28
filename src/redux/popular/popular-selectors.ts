import { PaginatedMovie } from "../../models/paginatedMovie.model";

export const getPopularMoviesSelector = (state: { popularMovies: PaginatedMovie; }) => state.popularMovies;