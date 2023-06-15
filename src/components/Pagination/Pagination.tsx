import React, { useState } from 'react';
import './Pagination.scss';

interface PaginationProps {
  total:number,
  perPage:number,
  currentPage:number,
  onPageChange:(arg0:number)=>void,
}

export const Pagination: React.FC<PaginationProps>
= ({
  total, perPage, currentPage, onPageChange
}) => {

  const paginationStep = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(paginationStep);

  const handlePreviousClick = () => {
    if (startIndex > 0) {
      const stepBack = startIndex - paginationStep;

      setEndIndex(startIndex);
      setStartIndex(stepBack < 0 ? 0 : stepBack);

    }
  };

  const handleNextClick = () => {
    const itemsLength = pageNumbers.length;

    if (endIndex < itemsLength) {
      const stepForward = endIndex + paginationStep;

      setStartIndex(endIndex);
      setEndIndex(stepForward >= itemsLength ? itemsLength : stepForward);
    }
  };

  const pagesNumber = Math.ceil(total / perPage);
  const pageNumbers = Array
    .from({ length: pagesNumber }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      <li className={`pagination__page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button
          className="pagination__page-button pagination__page-button--arrow"
          aria-disabled={currentPage === 1}
          onClick={handlePreviousClick}
        >
          {'<'}
        </button>
      </li>
      {

        pageNumbers
          .slice(startIndex, endIndex)
          .map((pageNumber) => (
            <li
            // eslint-disable-next-line react/no-array-index-key
              key={pageNumber}
              className="pagination__page-item"
              onClick={() => onPageChange(pageNumber)}
            >
              <button
                className="pagination__page-button"
              >
                {pageNumber}
              </button>
            </li>
          ))
      }
      <li className={`pagination__page-item ${Math.ceil(total / perPage) === currentPage ? 'disabled' : ''}`}>
        <button
          className="pagination__page-button pagination__page-button--arrow"
          aria-disabled={Math.ceil(total / perPage) === currentPage}
          onClick={handleNextClick}
        >
          {'>'}
        </button>
      </li>
    </ul>
  );
};
