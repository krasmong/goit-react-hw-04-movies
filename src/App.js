import React, { Component } from 'react';
import axios from 'axios';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
// import Main from './components/Main/Main';

import links from './db/nav.json';
// console.log(links);

console.log(axios.get());

const TrendingList = ({ movies }) => (
  <ul>
    {movies.map(({ id, title, release_date }) => (
      <li key={id}>
        <span>{title}</span>
        <span>{release_date}</span>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    // axios
    //   .get(
    //     'https://api.themoviedb.org/3/trending/all/week?api_key=91aea6be0a2d3e1853dbbebc31e6363d',
    //   )
    //   .then(response => response.json())
    //   .then(console.log);
  }

  render() {
    return (
      <div>
        <Container title={'Кинопоиск'}>
          <Header>
            <Navigation links={links} />
          </Header>
        </Container>

        <Container title={'Trending today'}>{/* <Main /> */}</Container>
      </div>
    );
  }
}

export default App;
