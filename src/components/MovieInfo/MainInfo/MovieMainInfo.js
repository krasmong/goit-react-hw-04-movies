import React from 'react';
import pathLink from '../../../path';
import s from './MovieMainInfo.module.css';

const MovieMainInfo = ({ movie, defaultImg }) => {
  const {
    title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  const userScore = vote_average * 10;

  const imgPath = `${pathLink.imagePoster}${poster_path}`;
  const imgUrl = poster_path ? imgPath : defaultImg;
  const releaseYear = release_date.slice(0, 4);

  return (
    <>
      <div className={s.movieMainInfo}>
        <div className="MovieImg">
          <img className="poster" src={imgUrl} alt={title} width={185} />
        </div>

        <div className={s.movieDesc}>
          <h2 className="title">
            {title}({releaseYear})
          </h2>
          <p className={s.text}>User score: {userScore} %</p>
          <h3>Overview</h3>
          {overview ? <p>{overview}</p> : <p>No data</p>}

          <h3>Genres</h3>
          {genres && genres.length > 0 ? (
            <p className={s.genres}>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieMainInfo;
