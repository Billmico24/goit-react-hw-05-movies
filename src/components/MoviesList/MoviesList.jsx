import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Container, CardWrapper, GalleryLink, GalleryImg, MovieTitle } from "./MoviesList.styled";
import noPoster from './noPoster.jpg';


export const MoviesList = ({movies}) => {
const location = useLocation();
// console.log(location)

    return (
        <Container>
            {movies.map(({id, name, title, poster_path}) => (
                <div key={id}>
                    <GalleryLink to={`/movies/${id}`} state={{ from: location }}>
                        <CardWrapper>
                            <GalleryImg src={
                                poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : noPoster} alt={title} />
                            <MovieTitle>{title || name}</MovieTitle>
                        </CardWrapper>
                        </GalleryLink>
                    
                </div>            
    ))}
        </Container>

    )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  )
};