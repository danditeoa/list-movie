import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestMovie } from '../../redux/search/search-actions';
import "./Searchbar.scss";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const dispatch = useDispatch();

  return (
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="search for a movie"
          value={searchValue} onChange={handleChange} />
        <button onClick={() =>  dispatch(requestMovie(searchValue))}>Search</button>
      </div> 
  );
};

export default Searchbar;