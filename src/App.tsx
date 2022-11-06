import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import store from "./redux/store";
import './styles/index.scss'

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
