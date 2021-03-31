import React from 'react';
// import s from './TrendingList.module.css'

const TrendingList = function ({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, release_date }) => (
        <li key={id}>
          <span> {title} </span>
          {/* <span> {release_date} </span> */}
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
