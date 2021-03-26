import React, { Component } from 'react';
import axios from 'axios';

const TrendingMovies = ({ movies }) => (
  <ul>
    {movies.map(({}) => (
      <li></li>
    ))}
  </ul>
);


class App 