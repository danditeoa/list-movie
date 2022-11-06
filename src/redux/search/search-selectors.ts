import { PaginatedMovie } from "../../models/paginatedMovie.model";

export const getSearchResultsSelector = (state: { searchResults: PaginatedMovie }) => state.searchResults;