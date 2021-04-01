import React, { Component } from 'react';
import * as getFetch from '../servises/tmdb-api';
import TrendingList from '../components/TrendingList/TrendingList';

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
      <>
        <TrendingList movies={movies} />
      </>
    );
  }
}

export default HomePage;
