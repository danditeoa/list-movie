import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: process.env.REACT_APP_MOVIEDB_TOKEN,
  language: "en",
  region: "US",
};

export const getPopular = () => {
  return axios.get('/movie/popular');
};