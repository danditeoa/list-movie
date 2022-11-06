import React, { useEffect, useState } from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, paginate }:any) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      setPageNumbers(prev => [...prev, i]);
    }
  },[]);

 // const handleNextPage =
  return (
    <ul className="pagination-container">
      {pageNumbers.map(page => (
        <li key={page} className="page-item">
          <span onClick={() => paginate(page)} className={`page-number ${page === currentPage ? 'page-number-active': ''}`}>
            {page}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;