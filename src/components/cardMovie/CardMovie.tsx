import React from 'react';
import { Movie } from '../../models/paginatedMovie.model';
import "./CardMovie.scss";

export type CardMovieProp = {
  movie: Movie;
}
const CardMovie = ({ movie }: CardMovieProp) => {

  const imageURL = "https://image.tmdb.org/t/p/w300/";
  const year = (releaseDate: string) => {
    return releaseDate.split("-")[0]
  }
  return (
    <div className="card-container">
      <img src={`${imageURL}${movie.backdrop_path}`} alt="image backdrop" />
      <h2>
        {movie.title}
      </h2>
      <p>
        <strong>
          {year(movie.release_date)}
        </strong>
      </p>
    </div>
  );
};

export default CardMovie;