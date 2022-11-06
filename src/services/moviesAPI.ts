import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = (page: number) => {
  return axios.get(`/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_TOKEN}&language=en-US&page=${page}`);
};

export const searchMovies = async(searchValue: string) => {
  return await axios.get(`/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_TOKEN}&language=en-US&query=${searchValue}&include_adult=false`);
};
