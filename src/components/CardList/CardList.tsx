import React from 'react';
import { Movie } from '../../models/paginatedMovie.model';
import CardMovie from '../cardMovie/CardMovie';
import "./CardList.scss";

export type CardListProp= {
  list: Movie[]
} 
const CardList = ({list}: CardListProp) => {
  if(!list) {
  return null;
  }

  return (
      <div className="list-container">
        {list.map(movie =><CardMovie key={movie.id} movie={movie} />)}
      </div> 
  );
};

export default CardList;