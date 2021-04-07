import React, { Component } from 'react';
import * as getFetch from '../servises/tmdb-api';

import { Container } from '../components/Container';
import { MoviesList } from '../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await getFetch.fetchMoviesTrending();
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container title={'Trending today'}>
        <MoviesList movies={movies} />
      </Container>
    );
  }
}

export default HomePage;
