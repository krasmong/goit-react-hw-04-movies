import React from 'react';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Navigation from './components/Navigation/Navigation';

import HomePage from './pages/HomePage';

import links from './db/nav.json';
// console.log(links);

function App() {
  return (
    <div>
      <Container title={'Кинопоиск'}>
        <AppBar />
      </Container>

      <Container title={'Trending today'}>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
