import { Container,Logo, Navigation } from "./styles"
import image from '../../assets/Group.svg'

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={image} alt="image" />
            </Logo>
            <Navigation>
                <a href='/Portfolio_Web/'>home</a>
                <a href='/Portfolio_Web/About'>sobre</a>
                <a href='/Portfolio_Web/Portfolio'>portfólio</a>
                <a href='/Portfolio_Web/servico'>serviços</a>
            </Navigation>
        </Container>
    )
}