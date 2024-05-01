import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Loading} from './Loading/Loading'
import {NotFound} from './NotFound/NotFound'
import { Container } from 'styled-bootstrap-grid';
import { Header, Link } from "./App.styled";

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const TrendingMovies = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('../components/Review/Review'));

export function App() {

  return (
    <Container >
      <Header>
        <nav>
            <Link to="/" end>Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" index element={<TrendingMovies />} />
          <Route path="/movies/" element={<Movies />} />
            
          <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="review" element={<Review />} />
          </Route>
            
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
