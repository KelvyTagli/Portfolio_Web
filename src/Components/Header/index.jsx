import { Container,Logo, Navigation } from "./styles"
import image from '../../assets/Group.svg'

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={image} alt="image" />
            </Logo>
            <Navigation>
                <a href='/'>home</a>
                <a href='/About'>sobre</a>
                <a href='/portfolio'>portfólio</a>
                <a href='/servico'>serviços</a>
            </Navigation>
        </Container>
    )
}