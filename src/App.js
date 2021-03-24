import React, { Component } from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
// import Main from './components/Main/Main';

import links from './db/nav.json';
console.log(links);

class App extends Component {
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
