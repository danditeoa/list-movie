import { RootState } from "../store"

export const getSearchResultsSelector = (state: RootState) =>
  state.searchResults.value
export const getSearchResultsStatusSelector = (state: RootState) =>
  state.searchResults.status
