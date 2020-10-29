import React, { useState } from 'react';
import { ResultCard } from './ResultCard';
import { Pagination } from './Pagination';
import { ReactComponent as Search } from '../img/search-solid.svg';

export const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [portionNumber, setPortionNumber] = useState(1);

  const search = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
            setPages(data.total_pages);
            setCurrentPage(1);
            setPortionNumber(1);
          } else {
            setResults([]);
          }
        });
    }
  };

  const handleInput = (e) => setQuery(e.currentTarget.value);

  const handlePages = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}&include_adult=false&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          setCurrentPage(pageNumber);
        } else {
          setResults([]);
        }
      });
  };

  const handlePortionNumber = (n) => {
    setPortionNumber(n);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <form className="search-bar" onSubmit={search}>
              <input
                className="search-bar__input"
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={handleInput}
              />
              <button className="search-bar__submit" type="submit">
                <Search fill="currentColor" height="24" />
              </button>
            </form>
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          {pages > 1 && (
            <Pagination
              pages={pages}
              handlePages={handlePages}
              currentPage={currentPage}
              portionNumber={portionNumber}
              handlePortionNumber={handlePortionNumber}
            />
          )}
        </div>
      </div>
    </div>
  );
};
