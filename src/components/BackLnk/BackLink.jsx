import { useLocation } from 'react-router-dom';

import { StyledLink } from './BackLink.styled';


export const BackLink = ({ to, children }) => {
  const location = useLocation();
  
    return (
    <StyledLink to={location?.state?.from ?? '/'}>
      {children}
    </StyledLink>
  );
};