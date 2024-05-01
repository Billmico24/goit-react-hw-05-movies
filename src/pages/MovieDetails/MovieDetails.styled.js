import styled from "@emotion/styled";
import { BackLink } from "../../components/BackLnk/BackLink";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
/* margin: 0 220px; */
/* padding: 0 250px; */
/* width: 100%;
@media screen and (max-width: 320px){
    padding: 20px;
} */
`;


export const Back = styled(BackLink)`
position: relative;
left: 200px;
margin-left: 200px;
`;

export const Wrapper = styled.main`

max-width: 800px;
display: flex;
margin: 0 auto;
padding: 40px 0px;
margin-top: 20px;
justify-content: center;
gap: 40px;
 box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
@media screen and (max-width: 425px){
    flex-direction: column;
    padding: 20px;
    margin-top: 20px;
}
`;

export const InfoWrapper = styled.div`
    width: 333px;
    @media screen and (max-width: 320px){
        width: 280px;
    }
`;

export const PosterImg = styled.img`
    height: 500px;
    @media screen and (max-width: 320px){
        height:90%;
    }
`;

export const AddInfoTitle = styled.h2`
  font-size: 18px;
  text-align: center;
    margin-top: 40px;
`;

export const AddInfo = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const AddInfoItem = styled.li`
  /* margin-top: 40px; */
  margin-bottom: 30px;
  text-align: center;
`;

export const AddInfoLink = styled(NavLink)`
 /* margin-right: 10px; */
text-transform: uppercase;
text-decoration: none;
font-weight: 700;
font-size: 1rem;
color: black;
/* text-align: center; */
margin-right: 5px;
margin-left: 5px;
:hover{
    color: brown;
}

&.active {
    /* composes: link; */
    color: brown;
  }
`;

export const ErrorTitle = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
`;