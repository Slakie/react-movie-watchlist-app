import React from 'react';
import { ReactComponent as LeftArrow } from '../img/arrow-left.svg';
import { ReactComponent as RightArrow } from '../img/arrow-right.svg';

export const Pagination = ({
  pages,
  handlePages,
  currentPage,
  portionNumber,
  handlePortionNumber,
  portionSize = 5,
}) => {
  const pageLinks = [];

  for (let i = 1; i <= pages; i++) {
    pageLinks.push(i);
  }

  let portionCount = Math.ceil(pages / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <ul className="pagination">
      {/* {currentPage > 1 && (
        <li className="pagination-links">
          <button
            className="btn-page"
            onClick={() => {
              handlePages(currentPage - 1);
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            Prev
          </button>
        </li>
      )} */}
      {portionNumber > 1 && (
        <li className="pagination-links">
          <button
            className="btn-page"
            onClick={() => handlePortionNumber(portionNumber - 1)}
          >
            <LeftArrow fill="currentColor" width="24" />
          </button>
        </li>
      )}
      {pageLinks
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <li
              className={
                currentPage === p
                  ? 'pagination-links active'
                  : 'pagination-links'
              }
              key={p}
            >
              <button
                onClick={() => {
                  handlePages(p);
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === p}
              >
                {p}
              </button>
            </li>
          );
        })}
      {portionCount > portionNumber && (
        <li className="pagination-links">
          <button
            className="btn-page"
            onClick={() => handlePortionNumber(portionNumber + 1)}
          >
            <RightArrow fill="currentColor" width="24" />
          </button>
        </li>
      )}
      {/* {currentPage < pages && (
        <li className="pagination-links">
          <button
            className="btn-page"
            onClick={() => {
              handlePages(currentPage + 1);
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            Next
          </button>
        </li>
      )} */}
    </ul>
  );
};
