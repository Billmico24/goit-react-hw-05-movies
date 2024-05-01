import styled from 'styled-components';


export const Container = styled.div`

  position: absolute;
    left: 47%;
    top: 50%;
    position: fixed;
    z-index: 4;
    width: 8px;
    @media screen and (max-width: 320px){
    left: 40%;
    }
`;

export const LoadingGif = styled.img`

  width: 80px;
`;

export const Text = styled.p`
margin-top: 0;
    color: palevioletred;
`;
