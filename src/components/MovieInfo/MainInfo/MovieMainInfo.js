import React from 'react';
import pathLink from '../../../path';
import s from './MovieMainInfo.css';

const MovieMainInfo = ({ movie, defaultImg }) => {
  const {
    title,
    poster_path,
    vote_average,
    owerview,
    ganres,
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

        <div className={s.MovieDesc}>
          <h2 className="title">
            {title}({releaseYear})
          </h2>
          <p className={s.text}>User score: {userScore} %</p>
          <h3>Owerwiew</h3>
          {owerwiew ? <p>{owerwiew}</p> : <p>No data</p>}

          <h3>Genres</h3>
          {genres && genres.lenght > 0 ? (
            <p>{genres.map(ganre.name).join('')}</p>
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieMainInfo;
