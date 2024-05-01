import styled from 'styled-components';

export const Container = styled.div`
 padding: 0px;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const ImgWrapper = styled.div`
  /* max-width: 200px; */
  /* width: 100%; */
  /* max-height: 300px; */
  /* margin: 0 auto; */
`;
export const CastImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;
export const CastInfo = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 8px;

`;
export const CastName = styled.span`
  font-weight: 500;
`;

export const Error = styled.p`
    text-align: center;
`;
