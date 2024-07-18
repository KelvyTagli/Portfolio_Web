import { Container,Logo, Navigation } from "./styles"
import image from '../../assets/Group.svg'

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={image} alt="image" />
            </Logo>
            <Navigation>
                <a to='/'>home</a>
                <a to='/About'>sobre</a>
                <a to='/portfolio'>portfólio</a>
                <a to='/servico'>serviços</a>
            </Navigation>
        </Container>
    )
}