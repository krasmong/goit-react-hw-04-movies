import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { HomePage, MoviesPage, About } from './pages';

function App() {
  return (
    <div>
      <Container title={'Кинопоиск'}>
        <AppBar />
      </Container>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
