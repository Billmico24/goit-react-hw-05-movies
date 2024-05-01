import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
`;