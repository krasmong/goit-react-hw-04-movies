import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
// import { HomePage, MoviesPage, About, MovieDetailsPage } from './pages';

import routes from './routes';
console.log(routes);

function App() {
  return (
    <>
      <Container title={'Кинопоиск'}>
        <AppBar />
      </Container>
      <Suspense fallback="Waiting...">
        <Switch>
          {routes.map(route => {
            // console.log(route);
            return <Route {...route} />;
          })}

          {/* <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/movies/:movieId" component={MovieDetailsPage} /> */}
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
