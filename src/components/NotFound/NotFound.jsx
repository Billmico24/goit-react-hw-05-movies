import notFoundImage from '../NotFound/pnf1.png';
import { Container, Image } from './NotFound.styled';

export const NotFound = () => {


    return (
        <Container>
            <Image src={notFoundImage } />
        </Container>
    )
}