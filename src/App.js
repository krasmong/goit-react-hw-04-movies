import React, { Component } from 'react';
import axios from 'axios';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
// import Main from './components/Main/Main';
import TrendingList from './components/TrendingList/TrendingList';

import links from './db/nav.json';
// console.log(links);

import * as getFetch from './servises/tmdb-api';

class App extends Component {
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
      <div>
        <Container title={'Кинопоиск'}>
          <Header>
            <Navigation links={links} />
          </Header>
        </Container>

        <Container title={'Trending today'}>
          {/* <Main /> */}
          <div>
            <TrendingList movies={movies} />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
