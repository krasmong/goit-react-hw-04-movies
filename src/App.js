import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import { HomePage, MoviesPage } from './pages';

function App() {
  return (
    <div>
      <Container title={'Кинопоиск'}>
        <AppBar />
      </Container>

      <Container title={'Trending today'}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
        </Switch>
        {/* <HomePage />
        <MoviesPage /> */}
      </Container>
    </div>
  );
}

export default App;
