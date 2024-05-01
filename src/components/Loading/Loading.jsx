import React from 'react';

import { Container, LoadingGif, Text } from './Loading.styled';
import catgif from './loading.gif'

export const Loading = () => {
  return (
    <>
      <Container>
              <LoadingGif src={catgif} alt='cat with fish gif' />
              <Text>Loading...</Text>
      </Container>
    </>
  );
};
