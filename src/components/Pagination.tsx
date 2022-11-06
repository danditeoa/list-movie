import React from 'react';
import './Pagination.scss';

const Pagination = ({ moviesPerPage, totalMovies, paginate }:any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination-container">
      {pageNumbers.map(page => (
        <li key={page} className='page-item'>
          <span onClick={() => paginate(page)} className='page'>
            {page}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;