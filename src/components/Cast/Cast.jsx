
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from '../../services/fetch';
import anyActor from './anyActor.jpg';
import { nanoid } from 'nanoid';
import { Container, CastList, ImgWrapper, CastImg, CastInfo, CastName, Error} from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addCast() {
      if (movieId) {
        try {
          const data = await fetchCast(movieId);
            setCast(data.cast);
            // console.log(data.cast);
          return data.cast;
        } catch (error) {
          console.log(error.response.data);
        }
      }
    }
    addCast(movieId);
  }, [movieId]);

  return (
    <Container>
      {cast.length !== 0 ? (
        <CastList>
          {cast.map(actor => {
            const actorPhoto = actor.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : anyActor;
            return (
              <li key={nanoid(3)}>
                <ImgWrapper>
                  <CastImg src={actorPhoto} alt={actor.name} />
                </ImgWrapper>
                <CastInfo>
                 <CastName>{actor.name}</CastName>
                </CastInfo>
                <CastInfo>
                  as {}
                  <CastName>{actor.character}</CastName>
                </CastInfo>
              </li>
            );
          })}
        </CastList>
      ) :   <Error>
        No casting information
          </Error>}
     
    
    </Container>
  );
};
export default Cast;