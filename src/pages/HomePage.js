import React, { Component } from 'react';
import * as getFetch from '../servises/tmdb-api';

import TrendingList from '../components/TrendingList/TrendingList';

import { Container } from '../components/Container';

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
        <TrendingList movies={movies} />
      </Container>
    );
  }
}

export default HomePage;
