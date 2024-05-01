import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const Container = styled.ul`
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

export const GalleryItem = styled.li`

`;

export const CardWrapper = styled.div`
  padding: 10px;
  /* border: 1px solid black; */
  height: 95%;
   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  

  :hover {
    transition: all 0.2s ease-in-out;
   
    scale: 103%;
  }
  
`;

export const GalleryLink = styled(Link)`
text-decoration: none;`;

export const GalleryImg = styled.img`
  width: 100%;
`;

export const MovieTitle = styled.p`
text-transform: uppercase;
color: black;
`;