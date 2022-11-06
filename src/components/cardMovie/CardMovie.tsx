import React from 'react';
import { Movie } from '../../models/paginatedMovie.model';
import "./CardMovie.scss";

const CardMovie = ({movie}: any) => {
 
const imageURL = "https://image.tmdb.org/t/p/w300/";
  return (
    <div className="card">
        
            <img src={`${imageURL}${movie.backdrop_path}`} alt="image backdrop" />

        <h2>
          {movie.title}
        </h2>
        <p>
          language: {movie.original_language}
        </p>
    </div>
  );
};

export default CardMovie;