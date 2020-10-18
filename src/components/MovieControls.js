import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ReactComponent as TrashIco } from '../img/trash-solid.svg';
import { ReactComponent as EyeIco } from '../img/eye-solid.svg';
import { ReactComponent as EyeSlashIco } from '../img/eye-slash-solid.svg';

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <EyeIco width="20" />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <TrashIco width="16" />
          </button>
        </>
      )}
      {type === 'watched' && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <EyeSlashIco width="20" />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <TrashIco width="16" />
          </button>
        </>
      )}
    </div>
  );
};
