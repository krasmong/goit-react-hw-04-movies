import { lazy } from 'react';
import { v4 as uuid } from 'uuid';

const routes = [
  {
    key: uuid(),
    exact: true,
    path: '/',
    component: lazy(() => import('./pages/HomePage')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/movies',
    component: lazy(() => import('./pages/MoviesPage')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/about',
    component: lazy(() => import('./pages/About')),
  },
  // {
  //   key: uuid(),
  //   exact: true,
  //   path: '/movies/:movieId',
  //   component: lazy(() => import('/movies/:movieId')),
  // },
];
export default routes;
