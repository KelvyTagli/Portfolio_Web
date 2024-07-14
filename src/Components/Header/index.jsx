import { Container,Section, Logo, Navigation } from "./styles"
import image from '../../assets/Group.svg'
import { Link } from 'react-router-dom';
export function Header(){
    return(
        <Container>
            <Section>
                <Logo>
                    <img src={image} alt="image" />
                </Logo>
                <Navigation>
                    <a to='/'>home</a>
                    <a href="/Skills" onclick="route()">skills</a>
                    <a href="/Projects" onclick="route()">projects</a>
                    <a href="/Experiences" onclick="route()">experiences</a>
                </Navigation>
            </Section>
        </Container>
    )
}