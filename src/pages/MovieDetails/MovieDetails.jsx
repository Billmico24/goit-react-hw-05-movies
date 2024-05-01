import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";

import { fetchMovieByID } from "services/fetch";
import noPoster from '../../components/MoviesList/noPoster.jpg';
import { BackLink } from "components/BackLnk/BackLink";
import { Wrapper, InfoWrapper, PosterImg, Container, AddInfoTitle, AddInfo, AddInfoItem, AddInfoLink, ErrorTitle } from "./MovieDetails.styled";
import { Loading } from "components/Loading/Loading";

function MovieDetails() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [error, setError] = useState('');

    const location = useLocation();
    // console.log(location);
    const backLinkHref = location.state?.from ?? "/goit-react-hw-05-movies/";

    useEffect(() => {
        (async function showMovieDetails() {
            try {
                const movie = await fetchMovieByID(movieId);
                // console.log(movie);
                setMovieInfo(movie);
            } catch (error) {
                console.log(error.response.data)
                setError(error.response.data.status_message);
            }
        })();
      
    
    }, [movieId]);
    

    return (
        <Container>
            <BackLink to={backLinkHref}>Back</BackLink>
            {error && (<ErrorTitle>
                {error}
            </ErrorTitle>)}
            {movieInfo && (   
                <Wrapper>
                    <PosterImg src={movieInfo.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                            : noPoster} alt={movieInfo.title} />
                    <InfoWrapper>
                            <h2>{`${movieInfo.title} (${movieInfo.release_date.slice(0, 4)})`}</h2>
                            <p>{`User score: ${Number.parseInt(movieInfo.vote_average * 10)}%`}</p>
                            <h3>Overview</h3>
                            <p>{movieInfo.overview}</p>
                            <h3>Genres</h3>
                            <p>{movieInfo.genres.map(({ name }) => `${name}`).join(', ')}</p>
                    </InfoWrapper>
                </Wrapper>)}
            {error === '' && (<div>
                    <AddInfoTitle>Additional information</AddInfoTitle>
                    <AddInfo>
                      <AddInfoItem>
                        <AddInfoLink to="cast" state={location.state}>
                           Cast
                        </AddInfoLink>
                        <AddInfoLink to="review" state={location.state}>
                           Reviews
                        </AddInfoLink>
                     </AddInfoItem>
               
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
                    </AddInfo>
                </div>)}
                
        </Container>
    )
}
export default MovieDetails;