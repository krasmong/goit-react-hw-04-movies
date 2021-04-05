import React, { Component } from 'react';
import { fetchMovieOnSubmit } from '../servises/tmdb-api';

class MoviesPage extends Component {
  state = {
    movies: null,
  };
  componentDidMount() {}

  render() {
    return (
      <>
        <h2> MoviesPage </h2>
      </>
    );
  }
}

export default MoviesPage;
